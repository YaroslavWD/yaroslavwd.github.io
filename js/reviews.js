$('.reviews__container').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 4000,
  adaptiveHeight: true,
  adaptiveWidth: true,
  prevArrow: true,
  nextArrow: true,
  prevArrow: '<button class="reviews__arrow reviews__prev"></button>',
  nextArrow: '<button class="reviews__arrow reviews__next"></button>'
});
