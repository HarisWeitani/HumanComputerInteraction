$('document').ready(function(){
	var width = $('.ProjectPicture1').width();

	$('#prev').click(function(){
		$('#Slide1').animate({
			left : + width
		},1000,function(){
			$('.ProjectPicture1:last-child').prependTo('#Slide1');
			$('#Slide1').css('left','');
		});
	});

	$('#next').click(function(){
		$('#Slide1').animate({
			left : - width
		},1000,function(){
			$('.ProjectPicture1:first-child').appendTo("#Slide1");
			$('#Slide1').css('left','');
		});		
	});


	var width2 = $('.ProjectPicture2').width();

	$('#prev2').click(function(){
		$('#Slide2').animate({
			left : + width2 
		},1000,function(){
			$('.ProjectPicture2:last-child').prependTo("#Slide2");
			$('#Slide2').css('left','');
		});		
	});


	$('#next2').click(function(){
		$('#Slide2').animate({
			left : - width2
		},1000,function(){
			$('.ProjectPicture2:first-child').appendTo("#Slide2");
			$('#Slide2').css('left','');
		});		
	});
});