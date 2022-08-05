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

  noSwipingClass: "swiper-no-swiping",
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

// --------------------------- открытие/закрытие меню ----------

const buttonOpenMenu = document.querySelector(".page-header__menu-btn");
const buttonCloseMenu = document.querySelector(".page-header__toggle--opened");
const menu = document.querySelector(".page-header__mobile-menu");
const content = document.querySelector(".page-main");

let condition = "close";

buttonOpenMenu.addEventListener("click", function () {
  if (condition === "close") {
    menu.classList.add("showMenu");
    console.log("jhjjhj");
    content.style.display = "none";

    condition = "open";
  }
});

buttonCloseMenu.addEventListener("click", function () {
  if (condition === "open") {
    menu.classList.remove("showMenu");
    content.style.display = "block";
    condition = "close";

    document.querySelectorAll(".navigation__list .open").forEach((element) => {
      element.classList.remove("open");
    });
  }
});

// --------------------------- открытие меню исходя из устройства----------

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // для мобильных устройств
  document.querySelectorAll(".navigation__item").forEach((element) => {
    element.addEventListener("click", OpenNavList);
  });

  function OpenNavList(event) {
    event.stopPropagation();
    if (this.classList.contains("open")) {
      this.classList.remove("open");
    } else {
      this.classList.add("open");
      let childrenLi = this.querySelectorAll("li");
      if (childrenLi.length !== 0) {
        childrenLi.forEach((element) => {
          element.addEventListener("click", OpenNavList);
        });
      }
    }
  }
} else {
  //для обычных устройств
  document.querySelectorAll(".first").forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.classList.add("open");
    });
  });

  document.querySelectorAll(".first").forEach((element) => {
    element.addEventListener("mouseout", function () {
      element.classList.remove("open");
    });
  });
}
