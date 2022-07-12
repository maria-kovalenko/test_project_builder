const sliderMain = document.querySelector(".slider-main");
const sliderNav = document.querySelector(".slider-nav");
const sliderText = document.querySelector(".slider-text");

let swiperNav = new Swiper(sliderNav, {
  slidesPerView: "auto",

  spaceBetween: 10,
  freeMode: true,

  breakpoints: {
    320: {
      direction: "horizontal",
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      direction: "vertical",
    },
  },
  mousewheel: {
    invert: true,
    sensitivity: 1,
  },
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

document.querySelector(".parking").addEventListener("click", () => {
  swiperMain.slideTo(1);
});
document.querySelector(".security").addEventListener("click", () => {
  swiperMain.slideTo(3);
});
document.querySelector(".architecture").addEventListener("click", () => {
  swiperMain.slideTo(2);
});
document.querySelector(".territory").addEventListener("click", () => {
  swiperMain.slideTo(0);
});

let swiperText = new Swiper(sliderText, {
  direction: "vertical",
  loop: true,
});
