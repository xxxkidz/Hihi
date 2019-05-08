$(document).ready(function(){
	//wheel script	
	var $angle = 0;	
	
	//right arrow
	$('.arrow-right').click(function() {
		
		$('.wheel').rotate({
			angle: $angle,
			animateTo: $angle+90,
			easing: $.easing.easeInOutExpo
		})
		
		$angle += 90;
		if($angle > 270) { $angle = 0; }
		
		change_bg();

	});
	
	//left arrow
	$('.arrow-left').click(function() {
		
		$('.wheel').rotate({
			angle: $angle,
			animateTo: $angle-90,
			easing: $.easing.easeInOutExpo
		})
		
		$angle -= 90;
		if($angle < 0) { $angle = 270; }
		
		change_bg();
		
	});

	//background
	function change_bg() {
	
		if($angle == 90){
			$('.bgs').find('div').fadeOut(500);
			$('.bg-90').fadeIn(500);
			$('.bg-cloud').fadeIn(500);
		}
		
		else if($angle == 180){
			$('.bgs').find('div').fadeOut(500);
			$('.bg-180').fadeIn(500);
			$('.bg-cloud').fadeIn(500);
		}
		
		else if($angle == 270){
			$('.bgs').find('div').fadeOut(500);
			$('.bg-270').fadeIn(500);
			$('.bg-cloud').fadeIn(500);
		}
		
		else if($angle == 0){
			$('.bgs').find('div').fadeOut(500);
			$('.bg-0').fadeIn(500);
			$('.bg-cloud').fadeIn(500);
		}
		
	}	
	
	//twitter	
	$(function() {
		$('#tweets').tweetable({username: 'ozythemes', time: false, limit: 1, replies: true, position: 'append'});
	});
	
	//audio controls
	var jingleAudio = document.getElementById('jingle-audio'),
	ctrl = document.getElementById('jingle-audio-control');
	
	ctrl.onclick = function () {	
		//Update the Button
		var pause = ctrl.innerHTML === 'pause';
		ctrl.innerHTML = pause ? 'play' : 'pause';		
		ctrl.className = pause ? 'pause' : 'play';
	
		//Update the Audio
		var method = pause ? 'pause' : 'play';
		jingleAudio[method]();
	
		//Prevent Default Action
		return false;
	};	

});