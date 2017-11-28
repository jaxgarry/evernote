var descriptionArray = ['some text', 'some more text', 'some even longer text'];
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