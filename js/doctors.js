$('.doctors__list').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  arrows: true,
  prevArrow: '<button class="doctors__arrow doctors__prev"></button>',
  nextArrow: '<button class="doctors__arrow doctors__next"></button>',
  autoplay: false,
  autoplaySpeed: 3000,
  centerPadding: '40px',
  responsive: [
{
  breakpoint: 1200,
  settings: {
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
  }
},
{
  breakpoint: 769,
  settings: {
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
},
{
  breakpoint: 320,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
}
]
});
