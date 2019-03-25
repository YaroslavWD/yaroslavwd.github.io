$('.example__img-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  centerPadding: '0',
  prevArrow: '<button class="example__arrow example__prev"></button>',
  nextArrow: '<button class="example__arrow example__next"></button>',
  responsive: [
{
  breakpoint: 1201,
  settings: {
    arrows: true,
    centerMode: false,
    centerPadding: '40px',
    slidesToShow: 2
  }
},

{
  breakpoint: 769,
  settings: {
    arrows: true,
    centerMode: false,
    centerPadding: '40px',
    slidesToShow: 1
  }
},

{
  breakpoint: 320,
  settings: {
    arrows: true,
    centerMode: false,
    centerPadding: '40px',
    slidesToShow: 1
  }
}
]
});
