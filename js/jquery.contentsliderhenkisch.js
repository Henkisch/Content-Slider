

(function($) {
	$.fn.contentsliderHL = function(options) {
		
		options = $.extend({}, $.fn.contentsliderHL.defaults, options);
		
		return this.each(function() {
		
			//Storlek på bild samt hur många bilder det är
var    imageWidth = $(".slider-window").width();
var    imageSum = $(".slider-images img").size();
var    imageSliderWidth = imageWidth * imageSum;

//Visa min pagination och val av den första länken
$(".slider-paging").show();
$(".slider-paging a:first").addClass("active");

//Ändra bilden till sin nya storlek
$(".slider-images").css({'width' : imageSliderWidth});

//Rotering och paginnation funktion
rotate = function(){
    var triggerID = $active.attr("rel") - 1; 
    var image_sliderPosition = triggerID * imageWidth; 
 
    $(".slider-paging a").removeClass('active'); 
    $active.addClass('active'); 
 
    //Slider Animering
    $(".slider-images").animate({
        left: -image_sliderPosition
    }, options.animatespeed );
 
}; 

//Rotering och timing
rotateSwitch = function(){
    play = setInterval(function(){ 
        $active = $('.slider-paging a.active').next(); 
        if ( $active.length === 0) { 
            $active = $('.slider-paging a:first'); 
        }
        rotate(); 
    }, options.timerspeed); //Timer
};
 
rotateSwitch(); 

//Pausa rotation vid hover på länk
$(".slider-images a").hover(function() {
    clearInterval(play); 
}, function() {
    rotateSwitch(); 
});
 

			
			
	});
		
};

$.fn.contentsliderHL.defaults = {
		'animatespeed':1000,
		'timerspeed': 4000
		
	};
			
}) (jQuery);

$(document).ready(function() {
$(this).contentsliderHL({'animatespeed':1000,
		'timerspeed': 4000});

//Klick funktion
$(".slider-paging a").click(function() {
    $active = $(this); 
    
    clearInterval(play); 
    rotate(); 
    rotateSwitch(); 
    return false; //Prevent browser jump to link anchor
});


});
