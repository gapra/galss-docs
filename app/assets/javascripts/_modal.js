/*$(function(){
	var getmodalid = document.getElementById('modal');
	var getmodaldata = getmodalid.getAttribute('modal-data');
	var getmodaltarget = getmodalid.getAttribute('modal-target');
	var getdiv = document.getElementsByTagName('div');
	var modaldata = 'gp-modal';
	var modalid = document.getElementById('yourmodal');
	var onmodalid = getmodaltarget;
	$('#modal').click(function(){
		$('body').addClass('open-modal');
		$('body').append('<div class="modal-overlay"></div>');
		if($('.modal-overlay').is(':visible')){
			$('.modal-overlay').addClass('open');
		}
		$(onmodalid+'.gp-modal').fadeIn();
	});
});*/
$(window).load(function(){
	jQuery(document).ready(function ($) {
		$('.modal-block').append('<div class="close-modal" modal-attr="close"></div>');
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