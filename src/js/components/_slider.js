import Swiper, { Navigation, Pagination } from 'swiper';

const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider, index) => {
  new Swiper(slider, {
    spaceBetween: 20,
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    pagination: {
      clickable: true,
      el: `.pagination-${index + 1}`,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    draggable: true,
    grabCursor: true,
    on: {
      init: function () {
        updatePagination(this);
      },
      slideChange: function () {
        updatePagination(this);
      }
    }
  });
});

function updatePagination(swiper) {
  const slides = swiper.slides;
  slides.forEach((slide, index) => {
    const paginationContainer = slide.querySelector('.slide-pagination');
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
      for (let i = 0; i < slides.length; i++) {
        const bullet = document.createElement('span');
        bullet.classList.add('swiper-pagination-bullet');
        if (i === swiper.activeIndex) {
          bullet.classList.add('swiper-pagination-bullet-active');
        }
        paginationContainer.appendChild(bullet);
        bullet.addEventListener('click', () => {
          swiper.slideTo(i);
        });
      }
    }
  });
}
