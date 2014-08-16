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

	/* Typography sub menu */
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
});

