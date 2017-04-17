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
    clickable($trigger); // defined in scripts-src/_interactive.js
    $trigger.on('click', function(){
        $('body, html').toggleClass('locked');
    });
    $('#menu-header-menu').on('click', 'a', function(){
        $trigger.removeClass('active');
        $('body, html').removeClass('locked');
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
    	console.log('hello');
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
