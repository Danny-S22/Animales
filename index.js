$(".flash-Cards").click(function () {
  var userChosenAnimal = $(this).attr("id");

  playSound(userChosenAnimal);
  changeTitle(userChosenAnimal);
});

//Play the sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Change the title 
function changeTitle(name){
    $("#texto").text(name.toUpperCase());
}
