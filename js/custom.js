var wheight,smoke;
	smoke = {
		sizes: function(){
			wheight = $(window).height();
			$('.wheight').css({'height': wheight});
		}
	}
	$(document).ready(function(){
		smoke.sizes();
	});
	$(window).on("load resize",function(e){
		smoke.sizes();
	});

