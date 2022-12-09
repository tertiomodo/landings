// Burger start

const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.nav__link');
const headerButton = document.querySelectorAll('.header__button');
const headerProfile = document.querySelector('.header__profile');

burger.addEventListener('click', () => {
  document.body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  headerNav.classList.toggle('header-nav--active');
});

navLink.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    headerNav.classList.remove('header-nav--active');
  });
});

headerButton.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    headerNav.classList.remove('header-nav--active');
  });
});

headerProfile.addEventListener('click', () => {
  document.body.classList.remove('stop-scroll');
  burger.classList.remove('burger--active');
  headerNav.classList.remove('header-nav--active');
});

// Burger end

// Show start

const hotelsCardButton = document.querySelector('.hotels-card__all');
const hotelsCard = document.querySelectorAll('.hotels-card__wrapper');

hotelsCardButton.addEventListener('click', () => {
  hotelsCard.forEach(el => {
    el.classList.add('hotels-card__wrapper--visible');
    hotelsCardButton.classList.add('hotels-card__all--hidden');
  });
});

// Show end
