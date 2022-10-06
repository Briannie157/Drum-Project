// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length; // Rep the number of buttons that have the class drum on it.

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting keyboard press

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "d":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "l":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}


// instead of adding event listeners to listen to clicks, we can add keypress instead to listen to the keyboard press

// document.addEventListener("keypress", function(){
//   alert("A key was pressed!");
// });
// instead of using an anonymous function we can use the event keyword to know which key triggered the event.
