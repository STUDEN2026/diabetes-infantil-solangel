(function(){
var menu=document.getElementById('menu'),nav=document.getElementById('nav'),top=document.getElementById('top');
menu.addEventListener('click',function(){var o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')})});
top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
var links=[].slice.call(nav.querySelectorAll('a'));
function onScroll(){top.classList.toggle('show',window.scrollY>600);
var cur='';links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s&&s.getBoundingClientRect().top<120)cur=a.getAttribute('href')});
links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')===cur)})}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
