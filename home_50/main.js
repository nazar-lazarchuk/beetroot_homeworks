new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: 'flip',

  flipEffect: {
      slideShadows: true,
      limitRotation: true,
  },

//   direction: "horizontal",
//   effect: "slide",
//   slidesPerView: 4,
//   breakpoints: {
//     1920: {
//       slidesPerView: 4,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     450: {
//       slidesPerView: 1,
//     },
//   },
});
