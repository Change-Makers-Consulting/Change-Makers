
const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');document.body.classList.toggle('no-scroll');});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');document.body.classList.remove('no-scroll');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
