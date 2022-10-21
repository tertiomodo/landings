// Swiper start

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// Swiper end
// Tab start

let tabsButton = document.querySelectorAll('.how__step-button');
let tabsItem = document.querySelectorAll('.how__content-item');

tabsButton.forEach(element => {
  element.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    tabsButton.forEach(btn => {
      btn.classList.remove('how__step-button--active');
    });

    e.currentTarget.classList.add('how__step-button--active');

    tabsItem.forEach(item => {
      item.classList.remove('how__content-item--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('how__content-item--active');
  });
});

// Tab end
// Accordion start

$('.accordion').accordion({
  active: false,
  collapsible: true,
});

// Accordion end
// Burger start

let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav-list');
let cross = document.querySelector('.header__cross');
let navItem = nav.querySelectorAll('.header__nav-item');
let transparent = document.querySelector('.header__transparent');

burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav-list--active');
  transparent.classList.toggle('header__transparent--active');
  document.body.classList.toggle('stop-scroll');
});

cross.addEventListener('click', () => {
  nav.classList.remove('header__nav-list--active');
  transparent.classList.remove('header__transparent--active');
  document.body.classList.remove('stop-scroll');
});

navItem.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.remove('header__nav-list--active');
    transparent.classList.remove('header__transparent--active');
    document.body.classList.remove('stop-scroll');
  });
});

transparent.addEventListener('click', () => {
  nav.classList.remove('header__nav-list--active');
  transparent.classList.remove('header__transparent--active');
  document.body.classList.remove('stop-scroll');
});

// Burger end
