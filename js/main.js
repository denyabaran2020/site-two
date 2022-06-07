$(function(){
	$('.gallery__slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="slick__arrow" src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img class="slick__arrow" src="images/arrow-right.svg" alt=""></button>',
	});

  $('.menu__buttom').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

});