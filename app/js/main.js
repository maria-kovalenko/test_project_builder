const swiper = new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slideToClickedSlide: true,

  slidesPerView: 1,
  loop: true,
  loopedSlice: 1,

  // spaceBetween: 30,

  // slidesPerColumn: 2,

  direction: "vertical",
  // direction: "horizontal",

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  // breakPoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   1200: {
  //     slidesPerView: 3,
  //   },
  // },

  thumbs: {
    swiper: {
      el: ".slider-mini",
      slidesPerView: 3,
      spaceBetween: 30,
      direction: "vertical",
      loop: true,
      loopedSlice: 3,
    },
  },
});
