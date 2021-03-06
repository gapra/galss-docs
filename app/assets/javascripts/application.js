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
//= require site
$(function(){
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

$(function(){
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

	var typoalignOpt = $('.typo-align-pos');
	var typoalignPos = typoalignOpt.offset();
	$('.typo-align').click(function(){
		$('html, body').animate({
			scrollTop : typoalignPos.top
		});
	});

	var typotransformOpt = $('.typo-transform-pos');
	var typotransformPos = typotransformOpt.offset();
	$('.typo-transform').click(function(){
		$('html, body').animate({
			scrollTop : typotransformPos.top
		});
	});

	var typolistOpt = $('.typo-lists-pos');
	var typolistPos = typolistOpt.offset();
	$('.typo-lists').click(function(){
		$('html, body').animate({
			scrollTop : typolistPos.top
		});
	});

	var typoblockquotesOpt = $('.typo-blockquotes-pos');
	var typoblockquotesPos = typoblockquotesOpt.offset();
	$('.typo-bquotes').click(function(){
		$('html, body').animate({
			scrollTop : typoblockquotesPos.top
		});
	});

	/* Color sub menu */
	var colorOpt = $('.color-pos');
	var colorPos = colorOpt.offset();
	$('.color-opt').click(function(){
		$('html, body').animate({
			scrollTop : colorPos.top
		});
	});

	var bgcolorOpt = $('.bg-color-pos');
	var bgcolorPos = bgcolorOpt.offset();
	$('.bg-color').click(function(){
		$('html, body').animate({
			scrollTop : bgcolorPos.top
		});
	});

	var txtcolorOpt = $('.txt-color-pos');
	var txtcolorPos = txtcolorOpt.offset();
	$('.txt-color').click(function(){
		$('html, body').animate({
			scrollTop : txtcolorPos.top
		});
	});

	/* Navs sub menu */
	var navsOpt = $('.navs-pos');
	var navsPos = navsOpt.offset();
	$('.nav-opt').click(function(){
		$('html, body').animate({
			scrollTop : navsPos.top
		});
	});

	/* Navbar submenu */
	var navbarOpt = $('.navbar-pos');
	var navbarPos = navbarOpt.offset();
	$('.navbar-opt').click(function(){
		$('html, body').animate({
			scrollTop : navbarPos.top
		});
	});

	/* Pagination sub menu */
	var pagiOpt = $('.pagi-pos');
	var pagiPos = pagiOpt.offset();
	$('.pagination-opt').click(function(){
		$('html, body').animate({
			scrollTop : pagiPos.top + 1132
		});
	});

	/* Tables sub menu */
	var tableOpt = $('.tables-pos');
	var tablePos = tableOpt.offset();
	$('.table-opt').click(function(){
		$('html, body').animate({
			scrollTop : tablePos.top
		});
	});

	var basictableOpt = $('.basictables-pos');
	var basictablePos = basictableOpt.offset();
	$('.basictables').click(function(){
		$('html, body').animate({
			scrollTop : basictablePos.top
		});
	});

	var evenrowsOpt = $('.evenrows-pos');
	var evenrowsPos = evenrowsOpt.offset();
	$('.evenrows').click(function(){
		$('html, body').animate({
			scrollTop : evenrowsPos.top
		});
	});

	var oddrowsOpt = $('.oddrows-pos');
	var oddrowsPos = oddrowsOpt.offset();
	$('.oddrows').click(function(){
		$('html, body').animate({
			scrollTop : oddrowsPos.top
		});
	});

	var tableborderOpt = $('.tableborder-pos');
	var tableborderPos = tableborderOpt.offset();
	$('.tableborder').click(function(){
		$('html, body').animate({
			scrollTop : tableborderPos.top
		});
	});

	var hoveredrowsOpt = $('.hoveredrows-pos');
	var hoveredrowsPos = hoveredrowsOpt.offset();
	$('.hoveredrows').click(function(){
		$('html, body').animate({
			scrollTop : hoveredrowsPos.top
		});
	});

	var responsivetableOpt = $('.responsivetable-pos');
	var responsivetablePos = responsivetableOpt.offset();
	$('.responsivetable').click(function(){
		$('html, body').animate({
			scrollTop : responsivetablePos.top
		});
	});

	/* Form sub menu */
	var formOpt = $('.form-pos');
	var formPos = formOpt.offset();
	$('.form-opt').click(function(){
		$('html, body').animate({
			scrollTop : formPos.top
		});
	});

	/* Button sub menu */
	var buttonOpt = $('.button-pos');
	var buttonPos = buttonOpt.offset();
	$('.button-opt').click(function(){
		$('html, body').animate({
			scrollTop : buttonPos.top
		});
	});

	/* Image sub menu */
	var imageOpt = $('.image-pos');
	var imagePos = imageOpt.offset();
	$('.image-opt').click(function(){
		$('html, body').animate({
			scrollTop : imagePos.top
		});
	});

	/* Helper sub menu */
	var helperOpt = $('.helper-pos');
	var helperPos = helperOpt.offset();
	$('.helper-opt').click(function(){
		$('html, body').animate({
			scrollTop : helperPos.top + 1132
		});
	});
});

/* Galss Modal JS */
$(window).load(function(){
	jQuery(document).ready(function ($) {
		$('.modal-block').append('<div class="close-modal" modal-attr="close"><i class="fa fa-angle-right"></i><i class="fa fa-angle-left"></i></div>');
		$('.block-example .modal-block .close-modal').remove();
		$('[modal-target-id]').click(function(){
			var modalShow = $(this).attr('modal-target-id');
			//alert(mtargetId);
			//$(this).addClass(mtargetId);
			$('body').addClass('open-modal').append('<div class="modal-overlay"></div>');
			$('.modal-overlay').hide();
			$('.modal-overlay').fadeIn(function(){
				$(modalShow).fadeIn().css('top', '-100%');
				$(modalShow).animate({top: 0}, 300);
			});
		});
		$('.close-modal').click(function(){
			$('body').removeClass('open-modal');
			$('.block-example .galss-modal').animate({top: 0}, 300).fadeIn();
			$('.galss-modal').animate({top: '-100%'}, 300).fadeOut();
			$('.modal-overlay').fadeOut(function(){
				$(this).remove();
			});
		});
	});
});
/* End of Galss Modal */