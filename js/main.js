$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
	});
	$('.banner-slider, .testimonial-slider').slick({
		arrows: false,
		dots:true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	$('.portfolio-slider').slick({
		dots:true,
		autoplay: true,
		autoplaySpeed: 1800,
		appendArrows: '.portfolio-slider-buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" "></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
	});
});
function initMap(){
	var coordinates = {lat: -37.806006, lng: 144.961291},
	markerImg = 'img/marker.png';

	map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coordinates,
    disableDefaultUI: true,
    scrollwheel: false,

  });

	marker = new google.maps.Marker({
          position: coordinates,
          map: map,
          animation: google.maps.Animation.BOUNCE,
          icon: markerImg
        });


}

google.maps.event.addDomListener(window, 'load', initMap);
