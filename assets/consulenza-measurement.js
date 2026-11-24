(() => {
  const measurementId = 'G-DRH16ND678';
  const preferenceKey = 'trasformazione-measurement-v1';
  const leadEventKey = 'trasformazione-consultation-lead-sent-v1';
  const panel = document.getElementById('measurement-preferences');
  const settings = document.getElementById('measurement-settings');
  let preference;
  let tagStarted = false;
  let leadEventSent = false;
  let leadSuccess = document.body.dataset.leadSuccess === 'true';

  try {
    preference = localStorage.getItem(preferenceKey);
  } catch {
    // The choice can still apply to this page if storage is unavailable.
  }

  function sendLeadOnce() {
    if (!leadSuccess || preference !== 'granted' || !tagStarted || leadEventSent) return;
    try {
      if (sessionStorage.getItem(leadEventKey) === '1') return;
      sessionStorage.setItem(leadEventKey, '1');
    } catch {
      // Prevent duplicate events within this page if session storage is unavailable.
    }
    leadEventSent = true;
    window.gtag('event', 'generate_lead', { send_to: measurementId });
  }

  function startTag() {
    if (tagStarted) return;
    tagStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted'
    });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(tag);
    sendLeadOnce();
  }

  function savePreference(choice) {
    preference = choice;
    try {
      localStorage.setItem(preferenceKey, choice);
    } catch {
      // Keep the choice in memory for this page.
    }
    if (choice === 'granted') {
      window['ga-disable-' + measurementId] = false;
      if (tagStarted) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted'
        });
      } else {
        startTag();
      }
      sendLeadOnce();
    } else if (tagStarted) {
      window['ga-disable-' + measurementId] = true;
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied'
      });
    }
    if (panel) panel.hidden = true;
    if (settings) settings.focus();
  }

  if (settings && panel) {
    settings.hidden = false;
    settings.addEventListener('click', () => {
      panel.hidden = false;
      panel.querySelector('button').focus();
    });
    panel.querySelectorAll('[data-measurement-choice]').forEach(button => {
      button.addEventListener('click', () => savePreference(button.dataset.measurementChoice));
    });
  }

  if (preference === 'granted') startTag();
  if (panel) panel.hidden = preference === 'granted' || preference === 'denied';
  sendLeadOnce();

  const form = document.querySelector('.contact-form');
  if (!form) return;

  const submit = form.querySelector('button[type="submit"]');
  const status = document.getElementById('consultation-form-status');

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled) return;
    submit.disabled = true;
    status.textContent = 'Invio in corso…';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        status.textContent = 'Invio non riuscito. Controlla i campi e riprova.';
        return;
      }

      form.reset();
      status.textContent = 'Richiesta inviata. Ti risponderò via email.';
      leadSuccess = true;
      sendLeadOnce();
    } catch {
      status.textContent = 'Invio non confermato. Controlla la connessione prima di riprovare.';
    } finally {
      submit.disabled = false;
    }
  });
})();
