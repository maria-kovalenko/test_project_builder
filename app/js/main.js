const swiper = new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },



  slideToClickedSlide: true,

  slidesPerView: 1,

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
});
