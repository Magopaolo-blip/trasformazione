# Trasformazione — Tarot and Coaching
Sito statico in italiano, pronto per GitHub Pages. Nessun abbonamento, build o dipendenza JavaScript. Versione iniziale: 20 ottobre 2026.

## Pubblicazione semplice
1. Crea su GitHub un repository, per esempio `trasformazione`.
2. Estrai lo ZIP. Carica **il contenuto** della cartella `trasformazione-site` nel repository, mantenendo la cartella `assets`. `index.html` deve essere nella radice del repository.
3. Nelle impostazioni del repository apri **Pages**. Scegli la pubblicazione da un branch, poi `main` e la cartella `/ (root)`; salva.
4. Attendi la pubblicazione. GitHub mostrerà l’URL del sito, normalmente `https://NOMEUTENTE.github.io/trasformazione/`.

L'interfaccia GitHub può cambiare. Tutti i percorsi del sito sono relativi per funzionare anche in una sottocartella. `.nojekyll` è facoltativo per questi file; evita elaborazioni Jekyll.

## Prima della pubblicazione definitiva
- Contatto attuale: `magopaolo@libero.it`, ricavato dai materiali. Confermare che sia l'indirizzo desiderato per Trasformazione; sostituirlo in `index.html` e `privacy.html` se necessario.
- Approvare i testi pubblici e la dichiarazione sul volto digitale di Leonardo.
- Prezzi, durata e modalità non sono inventati: si concordano al contatto. Nessun calendario o pagamento automatico è attivo.
- `privacy.html` descrive il funzionamento tecnico del sito; non è un'informativa completa sul trattamento della corrispondenza. Completare le informazioni sul titolare e sulla gestione dei dati, con i dati effettivi dell'attività, prima dell'uso commerciale. Non sono stati inventati indirizzo, partita IVA, tempi di conservazione o basi giuridiche.
- I link ai libri sono quelli dei materiali; verificare che puntino alle edizioni desiderate. Non sono dichiarati prezzi o disponibilità.
- Le fotografie sono immagini digitali illustrative; non rappresentano eventi o clienti reali.

## Dominio trasformazione.it
Nessun dominio è stato configurato. Dopo aver verificato la proprietà, associare il dominio nelle impostazioni Pages e seguire le istruzioni DNS fornite da GitHub. Non è incluso un file CNAME per non imporre un dominio non verificato. Una volta scelto l'URL definitivo, aggiungere canonical, URL social assoluti e sitemap.

## Modifiche
- Testi e collegamenti: `index.html`.
- Colori, spaziature, layout responsive: `assets/style.css`.
- Menu mobile e anno del footer: `assets/site.js`.
- Immagini: `assets/*.webp`; versioni ottimizzate delle immagini del progetto.
- Note tecniche sulla privacy: `privacy.html`.

## Anteprima locale
Aprire `index.html` nel browser, oppure eseguire `python3 -m http.server 8000` in questa cartella e visitare `http://localhost:8000`.

## Verifiche effettuate
Controlli statici su collegamenti interni, ancore, immagini, unicità degli ID e sintassi JavaScript. Nessun collaudo visivo in browser eseguito nell'ambiente di produzione dei file. Prima del lancio provare menu mobile, lettura su telefono, collegamenti email e Amazon.

## Riservatezza dei sorgenti
I file contengono soltanto i contenuti pubblici del sito. Non includono curriculum integrali, chiavi, credenziali o allegati personali. Le immagini e i testi restano del progetto; non viene concessa una licenza libera per il loro riutilizzo.
