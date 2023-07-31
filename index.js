

var noOfDrum = document.querySelectorAll(".drum").length;


for (var i = 0; i < noOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);

    });



}


document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.wav');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.wav');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.wav');
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.wav');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/snare.wav');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/kick-bass.wav');
            audio.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}