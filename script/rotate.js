$(document).ready(function(){
var descriptionArray = ['Remember everything.', 'Get organized.', 'Succeed together.', 'Meet Evernote, your second brain.'];
var descriptionLength = descriptionArray.length;
var description = $('#description-rotate');

function loop(i) {
    description.text(descriptionArray[i%descriptionLength]);
    setTimeout(function() {
        loop(i+1);
        description.addClass('rotate-text');
    }, 3050); // This duration must match the length of the animation
}

loop(0);

});

// navigation transition
$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.navbar .container .bg').addClass('show');
    
  } else {
    
    $('.navbar .container .bg').removeClass('show');
    
 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

