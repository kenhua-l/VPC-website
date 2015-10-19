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

// $(document).ready(function(){
// 	$('#nav').localScroll(800);
	
// 	//.parallax(xPosition, speedFactor, outerHeight) options:
// 	//xPosition - Horizontal position of the element
// 	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
// 	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
// 	$('#about').parallax("50%", 0.1);
// 	$('#team').parallax("50%", 0.1);
// 	//$('.bg').parallax("50%", 0.4);
// 	$('#portfolio').parallax("50%", 0.3);

// })

function hasClass(element, cls){
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

$window.bind('scroll', update);
