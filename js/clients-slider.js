var swiper = new Swiper('.clients__slider', {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 768
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1230
    1230: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  },

  autoplay: {
    delay: 5000,
  }
});
