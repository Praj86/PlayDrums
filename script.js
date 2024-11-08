// document.querySelector("button").addEventListener("click", function() {
//     alert("i got clicked");
// });
// addEventListener('keydown', function(event) {
//     alert(`${event} a key was pressed`)
//     console.log(event.key);
// });
// });


/* event handles for Clicks */
document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", function() {
        playSound(this.innerHTML);

    });
});

/*event hanlers for keyboard events*/
document.addEventListener("keydown", function(event) {
    playSound(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            break;

    }
}


