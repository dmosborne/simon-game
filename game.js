
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
var level = 0;


$(document).keypress(function() {
if (!started) {
  $("#level-title").text("Level " + level);
  nextSequence();
  straed = true;
  }
});

addEventListener("touchstart", $(document) => {});

ontouchstart = $(document) => {};

$(".btn").click(function() {

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

playSound(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("sucess");


  if (userClickedPattern.length === gamePattern.length){
  setTimeout(function () {
    nextSequence();
  }, 1000);
    }
      } else {
        console.log("wrong");
        playSound("wrong");

/* or
const audio = new Audio ("sounds/" + "wrong.mp3");
audio.play();*/

        $('body').addClass("game-over");

        setTimeout(function () {
        $('body').removeClass("game-over");
      }, 200);
      $("h1").text("Game Over, Press Any key to Restart");
      startOver();
      }
    }


 function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  };

  function playSound(name) {
    const audio = new Audio ("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

touchstart.addEventListener("touchstart", ("btn").click());
