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
