$(function(){                       
	$(window).on('load', function(){							/* Preloader */
        $('.preloader').delay(500).fadeOut('slow', function(){
			$(this).attr('style', 'display: none !important');
            $('body').css("overflow","auto");
        });
    });


    baguetteBox.run('.gallery');/* Плагин для анимации картинок */
	
	$(window).scroll(function(){		/* Scroll To Top */
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});