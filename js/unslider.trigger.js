$('#main_image_slideshow').unslider({
	speed: 500,               //  The speed to animate each slide (in milliseconds)
	delay: 3000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: false,               //  Enable keyboard (left, right) arrow shortcuts
	dots: false,               //  Display dot navigation
	fluid: false              //  Support responsive design. May break non-responsive designs
});