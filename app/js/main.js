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
