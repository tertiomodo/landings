const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
});

navLink.forEach(element => {
  element.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  });
});
