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
    ::Smooth Scrolling
\*------------------------------------*/
var smoothScrolling = function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		 	if (target.length) {
			    $('html, body').animate({
			    	scrollTop: target.offset().top - 60
			    }, 1000);
			    return false;
			}
		}
	});
}

jQuery(function($){
	smoothScrolling();
});
