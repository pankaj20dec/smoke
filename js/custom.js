var wheight,smoke;
	smoke = {
		sizes: function(){
			wheight = $(window).height();
			$('.wheight').css({'height': wheight});
		}
	}
	$(document).ready(function(){
		smoke.sizes();
		$(".gallery a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:400, autoplay_slideshow: false});
	});
	$(window).on("load resize",function(e){
		smoke.sizes();
	});

