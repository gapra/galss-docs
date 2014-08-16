// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery.min
$(document).ready(function(){
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
        if(this.href.trim() == window.location) {
            $(this).closest('li').addClass("active");
        }
    });
	/*! End of active menu setting */
	
	
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

