var init = function(){

	$('.wrapper').removeClass('wrapper--history');

	//-------------fancybox video Logo
	var $videoLogo = $('#videoLogo');

	//------------------------------------
	var videoLogo = document.getElementById('videoLogo');
	videoLogo.onloadstart = function() {
		setTimeout( function() { $videoLogo.get(0).play() } , 350);
	};

	videoLogo.onended = function() {
		$.fancybox.close();
	};

	$(".fancyboxVideoLogo").fancybox({
		maxWidth : 1400,
		openEffect : 'elastic',
		closeEffect   : 'elastic',
		beforeClose: function(){
			$videoLogo.get(0).pause();
		},
		afterLoad: function(e){
			$videoLogo.attr('src', $(e.element).data('video'));
			$videoLogo.get(0).load();
		}
	});
	//----------------------------
				//---animation
				// var ball = $('.ball-lg');
				// var values = [10, 3160];
				// var step = 525;
				// var start = 10;
				// var timerIncrease = null;
				// var timerDecrease;

		// $(document).ready(function(){

		// 		ball.hover(function(){
		// 					clearTimeout(timerDecrease);
		// 					timerIncrease = setInterval(increase, 50);
		// 				}, function(){
		// 							clearTimeout(timerIncrease);
		// 							timerDecrease = setInterval(decrease, 50);
		// 		});
		// 	//--------------------------
		// 		function increase(){
		// 			if( start == 3160){
		// 					ball.css('backgroundPosition', '-10px -' + start );
		// 					clearTimeout(timerIncrease);
		// 					return;
		// 			}
		// 			start += step;
		// 			ball.css('background-position', '-10px -' + start +'px' );
		// 		}
		// 	//----------------------------------
		// 			function decrease(){
		// 				if( start == 10){
		// 						ball.css('backgroundPosition', '-10px -' + start );
		// 						clearTimeout(timerDecrease);
		// 						return;
		// 				}
		// 				start -= step;
		// 				ball.css('background-position', '-10px -' + start +'px' );
		// 		}
		// })

}


module.exports.init = init;