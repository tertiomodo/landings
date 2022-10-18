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
