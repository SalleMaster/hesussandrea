// Navbar
const burgerMenu = document.querySelector('.burger-menu');
const menuResponsive = document.querySelector('.menu-responsive');
const menuItemWrap = document.querySelectorAll('.menu-item-wrap');

const toggleNav = () => {
  burgerMenu.classList.toggle('is-active');
  menuResponsive.classList.toggle('is-active');
};

burgerMenu.addEventListener('click', toggleNav);
menuItemWrap.forEach((item) => item.addEventListener('click', toggleNav));

// Intersection Observer
const body = document.querySelector('#body');
const hero = document.querySelector('#hero');

const heroObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});

heroObserver.observe(hero);
