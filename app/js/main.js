$(function(){
$('.header-menu__slider').slick({
  nextArrow:'<button class="slick-prev slick-arrow"><img src="images/prev.svg" alt="prev arrow"></button>',
  prevArrow:'<button class="slick-next slick-arrow"><img src="images/next.svg" alt="next arrow"></button>',
  responsive: [
    {
      breakpoint: 440,
      settings: {
        arrows: false
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});


