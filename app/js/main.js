const sliderMain = document.querySelector(".slider-main");
const sliderNav = document.querySelector(".slider-nav");

let swiperNav = new Swiper(sliderNav, {
  slidesPerView: 3,

  spaceBetween: 30,
  freeMode: true,
  direction: "vertical",
});

let swiperMain = new Swiper(sliderMain, {
  direction: "vertical",
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: swiperNav,
  },
});
