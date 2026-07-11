const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');b?.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>o.observe(x));document.getElementById('year').textContent=new Date().getFullYear();
const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.dot')];
const prev=document.querySelector('.carousel-arrow.prev');
const next=document.querySelector('.carousel-arrow.next');
let current=0;
let timer;

function showSlide(index){
  current=(index+slides.length)%slides.length;
  slides.forEach((slide,i)=>slide.classList.toggle('active',i===current));
  dots.forEach((dot,i)=>dot.classList.toggle('active',i===current));
}
function startCarousel(){
  clearInterval(timer);
  timer=setInterval(()=>showSlide(current+1),4000);
}
prev?.addEventListener('click',()=>{showSlide(current-1);startCarousel();});
next?.addEventListener('click',()=>{showSlide(current+1);startCarousel();});
dots.forEach((dot,i)=>dot.addEventListener('click',()=>{showSlide(i);startCarousel();}));
showSlide(0);
startCarousel();
