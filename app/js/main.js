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
    // 375: {
    //   slidesPerView: 2,
    // },

    // 550: {
    //   slidesPerView: 3,
    // },

    // 768: {
    //   slidesPerView: "auto",
    // },

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

let swiperText = new Swiper(sliderText, {
  slidesPerView: "auto",
  direction: "vertical",

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

document.querySelector(".btn-parking").addEventListener("click", () => {
  swiperMain.slideTo(1);
  swiperText.slideTo(1);
  swiperNav.hideSlide(1);
});
document.querySelector(".btn-security").addEventListener("click", () => {
  swiperMain.slideTo(3);
  swiperText.slideTo(3);
});
document.querySelector(".btn-architecture").addEventListener("click", () => {
  swiperMain.slideTo(2);
  swiperText.slideTo(2);
});
document.querySelector(".btn-territory").addEventListener("click", () => {
  swiperMain.slideTo(0);
  swiperText.slideTo(0);
});

document.querySelector(".card-terrytory").addEventListener("click", () => {
  swiperText.slideTo(0);
});
document.querySelector(".card-parking").addEventListener("click", () => {
  swiperText.slideTo(1);
});
document.querySelector(".card-architecture").addEventListener("click", () => {
  swiperText.slideTo(2);
});
document.querySelector(".card-security").addEventListener("click", () => {
  swiperText.slideTo(3);
});

// ------------ menu -----------------

const linkName = document.querySelector(".navigation__item");
const subLinkName = document.querySelector(".sub-navigation__item");
const subMenu = document.querySelector(".sub-navigation");

let conditionMenu = "close";
let conditionSubMenu = "close";

linkName.addEventListener("click", function () {
  if (conditionMenu === "close") {
    subMenu.classList.add("open");
    conditionMenu = "open";
  } else if (conditionMenu === "open" && conditionSubMenu === "close") {
    subLinkName.addEventListener("click", function () {
      subMenu.classList.add("open");
      conditionSubMenu = "open";
    });
  } else {
    subMenu.classList.remove("open");
    conditionMenu = "close";
  }
});
