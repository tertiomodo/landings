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
  heightStyle: 'content',
});

let tabindex = document.querySelectorAll('.questions__accordion-title');

tabindex.forEach(() => {
  $('.questions__accordion-title').attr('tabindex', 0);
});

tabindex.forEach(e => {
  e.addEventListener('click', () => {
    $('.questions__accordion-title').attr('tabindex', 0);
  });
});

tabindex.forEach(e => {
  e.addEventListener('keydown', e => {
    if(e.which === 13){
       $('.questions__accordion-title').attr('tabindex', 0);
    }
  });
});

let accordion__title = document.querySelectorAll('.questions__accordion-title');
let accordion__item = document.querySelectorAll('.questions__accordion-item');
let questions__accordion = document.querySelector('.questions__accordion');

accordion__title.forEach(element => {
  element.addEventListener('focus', e => {
    const title = e.currentTarget.dataset.title;

    accordion__item.forEach(item => {
      item.classList.remove('pseudoclass--active');
      item.classList.remove('pseudoclass-bottom--active');
    });

    if (title === 'end') {
      document.querySelector(`[data-item="${title}"]`).classList.add('pseudoclass-bottom--active');
      document.querySelector(`[data-item="${title}"]`).classList.add('pseudoclass--active');
      tabindex.forEach(e => {
        e.addEventListener('keydown', e => {
          if(e.which === 9){
            accordion__item.forEach(item => {
              item.classList.remove('pseudoclass-bottom--active');
              item.classList.remove('pseudoclass--active');
            });
          }
        });
      });
    } else {
      document.querySelector(`[data-item="${title}"]`).classList.add('pseudoclass--active');
    }
  });
});

document.addEventListener('click', e => {
  const click = e.composedPath().includes(questions__accordion);
  if (!click) {
    accordion__item.forEach(item => {
      item.classList.remove('pseudoclass-bottom--active');
      item.classList.remove('pseudoclass--active');
    });
  }
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
// Search start

let header__button = document.querySelector('.header__button');
let form = document.querySelector('.header__form');
let form__button = document.querySelector('.header__form-button');
let form__input = document.querySelector('.header__form-search');
let transparent__search = document.querySelector('.header__transparent');
let closed = document.querySelector('.header__form-closed');

header__button.addEventListener('click', () => {
  header__button.classList.add('header__button--active');
  form.classList.add('header__form--active');
  form__button.classList.add('header__form-button--active');
  form__input.classList.add('header__form-search--active');
  form__input.removeAttribute('tabindex');
  closed.classList.add('header__form-closed--active');
  transparent__search.classList.add('header__transparent--active');
  document.body.classList.add('stop-scroll');
});


closed.addEventListener('click', () => {
  header__button.classList.remove('header__button--active');
  form.classList.remove('header__form--active');
  form__button.classList.remove('header__form-button--active');
  form__input.classList.remove('header__form-search--active');
  form__input.setAttribute('tabindex', '-1');
  closed.classList.remove('header__form-closed--active');
  transparent__search.classList.remove('header__transparent--active');
  document.body.classList.remove('stop-scroll');
});

transparent__search.addEventListener('click', () => {
  header__button.classList.remove('header__button--active');
  form.classList.remove('header__form--active');
  form__button.classList.remove('header__form-button--active');
  form__input.classList.remove('header__form-search--active');
  closed.classList.remove('header__form-closed--active');
  transparent__search.classList.remove('header__transparent--active');
  document.body.classList.remove('stop-scroll');
  form.reset();
});

form__button.addEventListener('click', () => {
  setTimeout(() => {
    form.reset();
  }, 100);
});

// Search end
