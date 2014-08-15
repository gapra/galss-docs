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
//= require jquery.min
//= require jquery_ujs
//= require_tree .
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

$(document).ready(function(){
	'use strict';

	var docmenu = $('.start-doc');
	var docmenuPos = docmenu.offset();

	$(window).scroll(function(){
		if($(this).scrollTop() > docmenuPos.top) {
			$('nav.vertical-menu').addClass('doc-menu');
		} else {
			$('nav.vertical-menu').removeClass('doc-menu');
		}
	});

	$('.vertical-menu ul li:first').addClass('active clicked');
	$('.vertical-menu ul.navi-menu li ul').hide();
	$('.vertical-menu ul.navi-menu li ul:first').show();
	$('.vertical-menu ul.navi-menu li a.a-menu').click(function(e){
		if($(this).parent().hasClass('active clicked')) {
			$('.vertical-menu .clicked ul').slideUp(200);
			$('.vertical-menu .clicked').removeClass('active clicked');
			$('.vertical-menu i').removeClass('fa-caret-down').addClass('fa-caret-right');
		} else {
			$('.vertical-menu .clicked ul').slideUp(200);
			$('.vertical-menu .clicked').removeClass('active clicked');
			$('.vertical-menu i').removeClass('fa-caret-down').addClass('fa-caret-right');
			if($(this).next('ul').length) {
				$(this).parent().addClass('active clicked');
				$('.vertical-menu .clicked i').addClass('fa-caret-down').removeClass('fa-caret-right');
				$(this).next('ul').slideDown(300);
			}
		}
		e.stopPropagation();
	});

	/* Overview sub menu */

	var overviewOpt = $('.overview-pos');
	var overviewPos = overviewOpt.offset();
	$('.overview').click(function(){
		$('html, body').animate({
			scrollTop : overviewPos.top
		}, 'slow');
	});

	var html5Opt = $('.html5-pos');
	var html5Pos = html5Opt.offset();
	$('.html5-opt').click(function(){
		$('html, body').animate({
			scrollTop : html5Pos.top
		}, 'slow');
	});

	var cssreset = $('.css-reset-pos');
	var cssresetPos = cssreset.offset();
	$('.css-reset').click(function(){
		$('html, body').animate({
			scrollTop : cssresetPos.top
		}, 'slow');
	});

	var mobileOpt = $('.mobile-pos');
	var mobilePos = mobileOpt.offset();
	$('.mobile-opt').click(function(){
		$('html, body').animate({
			scrollTop : mobilePos.top
		}, 'slow');
	});

	var containerOpt = $('.container-pos');
	var containerPos = containerOpt.offset();
	$('.container-opt').click(function(){
		$('html, body').animate({
			scrollTop : containerPos.top
		}, 'slow');
	});

	/* Grid sub menu */

	var gridSys = $('.grid-sys-pos');
	var gridSysPos = gridSys.offset();
	$('.grid-sys').click(function(){
		$('html, body').animate({
			scrollTop : gridSysPos.top
		}, 'slow');
	});

	var gridOpt = $('.grid-opt-pos');
	var gridPos = gridOpt.offset();
	$('.grid-opt').click(function(){
		$('html, body').animate({
			scrollTop : gridPos.top
		}, 'slow');
	});

	var defcolOpt = $('.default-col-pos');
	var defcolPos = defcolOpt.offset();
	$(window).scroll(function(){
		if($(this).scrollTop() === defcolPos.top - 20 || $(this).scrollTop() > defcolPos.top - 20){
			$('li.grid-system').css({
				'position' : 'fixed',
				'top' : '0'
			});
		}else{
			$('li.grid-system').css('position', 'relative');
		}
	});

	$('.default-col').click(function(){
		$('html, body').animate({
			scrollTop : defcolPos.top
		}, 'slow');
	});

	var cencolOpt = $('.centered-col-pos');
	var cencolPos = cencolOpt.offset();
	$('.centered-col').click(function(){
		$('html, body').animate({
			scrollTop : cencolPos.top
		}, 'slow');
	});

	var expcolOpt = $('.exploded-col-pos');
	var expcolPos = expcolOpt.offset();
	$('.exploded-col').click(function(){
		$('html, body').animate({
			scrollTop : expcolPos.top
		}, 'slow');
	});

	var expmixcolOpt = $('.exploded-mix-col-pos');
	var expmixcolPos = expmixcolOpt.offset();
	$('.exploded-mix-col').click(function(){
		$('html, body').animate({
			scrollTop : expmixcolPos.top
		}, 'slow');
	});

	var rescolOpt = $('.responsive-col-pos');
	var rescolPos = rescolOpt.offset();
	$('.responsive-col').click(function(){
		$('html, body').animate({
			scrollTop : rescolPos.top
		}, 'slow');
	});

	/* Typography sub menu */

	var typoOpt = $('.typo-pos');
	var typoPos = typoOpt.offset();
	$('.typo-opt').click(function(){
		$('html, body').animate({
			scrollTop : typoPos.top
		}, 'slow');
	});

	var typoHeadingOpt = $('.typo-headings-pos');
	var typoHeadingPos = typoHeadingOpt.offset();
	$('.typo-headings').click(function(){
		$('html, body').animate({
			scrollTop : typoHeadingPos.top
		});
	});

	var typoBodyOpt = $('.typo-body-pos');
	var typoBodyPos = typoBodyOpt.offset();
	$('.typo-body').click(function(){
		$('html, body').animate({
			scrollTop : typoBodyPos.top
		});
	});

	var typofontfaceOpt = $('.typo-fontface-pos');
	var typofontfacePos = typofontfaceOpt.offset();
	$('.typo-fontface').click(function(){
		$('html, body').animate({
			scrollTop : typofontfacePos.top
		});
	});

	/* Highligher menu */

	
	
});

