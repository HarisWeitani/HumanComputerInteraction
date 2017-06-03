$('document').ready(function(){

$('#toggle1').click(function(){
	$('.content_toggle1').toggle(500);
});

$('#toggle2').click(function(){
	$('.content_toggle2').toggle(500);
});

$('#toggle3').click(function(){
	$('.content_toggle3').toggle(500);
});

$('#toggle4').click(function(){
	$('.content_toggle4').toggle(500);
});

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

var width3 = $('.ProjectPicture3').width();

$('#prev3').click(function(){
	$('#Slide3').animate({
		left : + width3
	},1000,function(){
		$('.ProjectPicture3:last-child').prependTo("#Slide3");
		$('#Slide3').css('left','');
	});		
});


$('#next3').click(function(){
	$('#Slide3').animate({
		left : - width3
	},1000,function(){
		$('.ProjectPicture3:first-child').appendTo("#Slide3");
		$('#Slide3').css('left','');
	});		
});

var width4 = $('.ProjectPicture4').width();

$('#prev4').click(function(){
	$('#Slide4').animate({
		left : + width4 
	},1000,function(){
		$('.ProjectPicture4:last-child').prependTo("#Slide4");
		$('#Slide4').css('left','');
	});		
});


$('#next4').click(function(){
	$('#Slide4').animate({
		left : - width4
	},1000,function(){
		$('.ProjectPicture4:first-child').appendTo("#Slide4");
		$('#Slide4').css('left','');
	});		
});

});

