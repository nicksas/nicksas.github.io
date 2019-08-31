$(function(){                       
	$(window).on('load', function(){							/* Preloader */
        $('.preloader').delay(500).fadeOut('slow', function(){
			$(this).attr('style', 'display: none !important');
            $('body').css("overflow","auto");
        });
    });
});