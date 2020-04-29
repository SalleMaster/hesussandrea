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

// Dark & White Theme Change
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

// Fade In Animation
const fadeIn = document.querySelectorAll('.fade-in');

const fadeinOptions = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 0.1,
};

const fadeInCallback = (entries, fadeInObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('animate');
    }
  });
};

const fadeInObserver = new IntersectionObserver(fadeInCallback, fadeinOptions);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});
