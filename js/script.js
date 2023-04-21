const navBtn = document.getElementById('nav-btn');
const navMenu = document.getElementById('nav-menu');

navBtn.addEventListener('click',function() {
  navBtn.classList.toggle('open');
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
});