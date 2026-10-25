document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigazione');
if(toggle&&nav){toggle.hidden=false;const close=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('is-open',!open);});nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('is-open')){close();toggle.focus();}});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
