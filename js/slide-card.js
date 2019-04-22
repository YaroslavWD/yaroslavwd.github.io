var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  navigation: {
    nextEl: '.slide-button-next',
    prevEl: '.slide-button-prev',
  }
});

var galleryTop = new Swiper('.gallery-top', {
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
