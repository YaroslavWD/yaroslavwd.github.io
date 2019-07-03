var galleryThumbs = new Swiper('.gallery-thumbs', {
  speed: 600,
  parallax: true,
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
  speed: 600,
  parallax: true,
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  },

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.slide-button-next',
    prevEl: '.slide-button-prev',
  }
});
