$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform': 'translate(0px, '+ wScroll /2.5 +'%)'
	});

	$('.back-bird').css({
		'transform': 'translate(0px, '+ wScroll /4 +'%)'
	});

	$('.fore-bird').css({
		'transform': 'translate(0px, -'+ wScroll /50 +'%)'
	});

	if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)){
		$('.clothes-pics figure').each(function(i){
			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			}, 150 * (i+1))
		})
	}
})