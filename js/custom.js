var wheight,smoke;
	smoke = {
		sizes: function(){
			wheight = $(window).height();
			$('.wheight').css({'height': wheight});
		},
		accordion: function(){
			$('.question-answer h6').click(function(){
				
				if($(this).parent().find('.answer').hasClass('active')){
					$(this).parent().find('.answer').removeClass('active').slideUp(500);
					$(this).find('.plus').removeClass('minus');
				}else{
					$('.question-answer h6').parent().find('.answer').removeClass('active').slideUp(500);
					$('.question-answer h6').find('.plus').removeClass('minus');
					$(this).parent().find('.answer').addClass('active').slideDown(500);
					$(this).find('.plus').addClass('minus');
				}
			});
		}
	}
	$(document).ready(function(){
		smoke.sizes();
		smoke.accordion();
		if($('.gallery-ul').length){
			$(".gallery-ul a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:400, autoplay_slideshow: false});
		}
		
	});
	$(window).on("load resize",function(e){
		smoke.sizes();
	});

