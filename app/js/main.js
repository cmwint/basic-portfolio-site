/*------------------------------------*\
    ::Clickable
\*------------------------------------*/
var clickable = function($el, stopProp){
    stopProp = stopProp || false;

    // stop link propogation
    if(stopProp){
        $el.find('a').click(function(e){
            e.stopPropagation();
        });
    }
    // expand sub menu
    $el.click(function(){
        $el.not(this).removeClass('active');
        $(this).toggleClass('active');
    });
};

/*------------------------------------*\
    ::Mobile Toggle
\*------------------------------------*/
var mobile = function(){
    var $trigger = $('#js-trigger');
    clickable($trigger);
    $('.main-head__menu').on('click', function(){
    	var $nav = $(this).find('nav a');
    	$nav.on('click', function(){
	        $trigger.removeClass('active');
    	});
    });
};
jQuery(function($){
    mobile();
});

/*------------------------------------*\
    ::Nav Popup
\*------------------------------------*/
var navPopup = function(){
    var $menu = $('.main-head__menu');
    var $window = $(window);
    window.heroTimer = null;

    var navHidden = function(){
        if($window.width() > 800){
            var heroHeight = $('.main-head').height() - 300;
            $window.scroll(function(){
                if ($(this).scrollTop() >= heroHeight){
                    $menu.addClass('sticky');
                }
                else{
                    $menu.removeClass('sticky');
                }
            });
        }
    };

    navHidden();
    $window.on('resize', function(){
        clearTimeout(heroTimer);
        window.heroTimer = setTimeout(navHidden, 100);
    });
};
jQuery(function($){
    navPopup();
});


/*------------------------------------*\
    ::Smooth Scrolling
\*------------------------------------*/
var smoothScrolling = function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		 	if (target.length) {
			    $('html, body').animate({
			    	scrollTop: target.offset().top - 140
			    }, 1000);
			    return false;
			}
		}
	});
}

jQuery(function($){
	smoothScrolling();
});
