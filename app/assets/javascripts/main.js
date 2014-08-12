$(document).ready(function(){
	'use strict';
	
	/*! Sub Menu Effect */
	$('.navi-bar-default .navi-menu li').hover(function(){
		$(this).addClass('hover');
		$('ul:first', this).slideDown();
	}, function(){
		$(this).removeClass('hover');
		$('ul:first', this).stop(true).slideUp('fast');
	});

	
	/*$('.vertical-menu .navi-menu li').click(function(e){
		$('ul:first', this).slideDown();
		e.stopPropagation();
		$(document, '.vertical-menu .navi-menu li').click(function(){
			if($('ul:first', this).is(':visible')){
				$('.vertical-menu .navi-menu li ul', this).slideUp();
			}
		});
	});*/
	/*! End of Sub menu */

	/*! Active menu setting */
	$('ul.navi li a').each(function(index) {
        if(this.href.trim() == window.location)
            $(this).closest('li').addClass("active");
    });
	/*! End of active menu setting */
	
	/*! Modal Gallery */
	$('.gaplight').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: false,
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
    /*! Modal Inline */
    $('.view-book').magnificPopup({
        item: {
            src: '#open-books',
            type: 'inline'
        },
        mainClass: 'mfp-with-zoom',
        zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
            easing: 'ease-in-out',
			opener: function(element) {
				return element.find('div');
			}
		}
    });
	
	/*! back to top */
	var offset = 520;
	var dur = 800;
	$(window).scroll(function(){
		if($(this).scrollTop() > offset){
			$('.backtop').fadeIn(dur);
		}else{
			$('.backtop').fadeOut(dur);
		}
	});
	$('.backtop').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, dur);
		return false;
	});
	$('.backtop').hover(function(){
		$(this).animate({
			bottom: '40px',
			opacity: '0.9'
		}, 300);
	}, function(){
		$(this).stop(true).animate({
			bottom: '30px',
			opacity: '0.6'
		}, 300);
	});
});
