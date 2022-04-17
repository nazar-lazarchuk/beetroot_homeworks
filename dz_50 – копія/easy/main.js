const DESKTOP = 1650;
const TABLET = 1280;
const MOBILE = 768;
const SMALL_MOBILE = 450;
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true
  },
  breakpoints: {
    SMALL_MOBILE: {
        slidesPerView: 1,
    },
    MOBILE: {
        slidesPerView: 2,
    },
    TABLET: {
        slidesPerView: 3,
    },
    DESKTOP: {
        slidesPerView: 4,
    },
},
});
