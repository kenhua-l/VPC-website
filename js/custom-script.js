var $window = $(window);
var velocity = 0.4;

function update(){
    var pos = $window.scrollTop();

    $('.parallax-container').each(function() {
        var $element = $(this);
        var height = $element.height();

        if (hasClass((this), 'js-background-1')) {
        	$(this).css('backgroundPosition', '50% ' + (Math.round((height - pos) * velocity) -23) + 'px');
        } else if(hasClass((this), 'js-background-2')) {
        	$(this).css('backgroundPosition', '50% ' + (Math.round((height - pos) * velocity) + 343) + 'px');
    	} else if(hasClass((this), 'js-background-3')) {
        	$(this).css('backgroundPosition', '50% ' + (Math.round((height - pos) * velocity) + 688) + 'px');
    	} else {
    		$(this).css('backgroundPosition', '50% ' + (Math.round((height - pos) * velocity) + 1033) + 'px');
    	}
    });
};

function hasClass(element, cls){
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

$window.bind('scroll', update);
