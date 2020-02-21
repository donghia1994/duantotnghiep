import "@babel/polyfill";
import U from "./lib/Utilities";
import Loading from "./lib/Loading";

function header_sticky(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$('header').addClass('header-sticky');
			$('.home-box-logo').addClass('logo-active');
			$('.home-button').hide();
			$('.home-button-sticky').slideDown();
		}
		else{
			$('header').removeClass('header-sticky');
			$('.home-box-logo').removeClass('logo-active');
			$('.home-button').show();
			$('.home-button-sticky').hide();
		}
	})
}


document.addEventListener('DOMContentLoaded', () => {
	Loading();
	header_sticky();
});
var swiper = new Swiper('.swiper1', {
	pagination: {
	  el: '.swiper-pagination',
	},
  });
var swiper = new Swiper('.swiper2', {
	slidesPerView: 4,
	spaceBetween: 10,
	freeMode: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints : {
		768 : {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1025 : {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	}
  });
  var swiper = new Swiper('.swiper3', {
	slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
		el: '.swiper-pagination',
		clickable: true,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
	},
	breakpoints : {
		768 : {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1025 : {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	}
  });
  $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
	$(e.target)
	  .prev()
	  .find("i:last-child")
	  .toggleClass("fa-minus fa-plus");
  });

$(window).on("scroll",function(){
	if($(window).scrollTop()){
		$('home-main-header').removeClass('nav-bar');
	  }
  })