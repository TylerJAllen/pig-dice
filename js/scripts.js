
//--------------Back End--------------//
//Player constructor
function Player(name, age,) {
  this.name = name;
  this.age = age;

}

//Method to roll dice
Player.prototype.roll = function(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + 1);
}

//Method to decide whether player gets to
Player.prototype.determine = function(result) {
  alert(result);
  if (result === 1) {

    alert("You rolled One");
    return false;

  } else if (result >= 2) {

    Player.score = [result];

    console.log(Player.score);

    var chosen = prompt("Would you like to keep rolling?");

    if (chosen === "yes") {
      Player.score[0] += this.roll(1,7);
      console.log(result);

    }
  }
}

Player.prototype.playerTurn = function (){
  var score = 0;
  for (var index = 1; index > 0; index +=1) {
    var rollValue = this.roll(1,7);
    alert(rollValue);
    if (rollValue === 1) {
      score = 0;
      index = -1;
    }
    else {
      score += rollValue;
      var hold = prompt("would you like to hold?");
      if (hold === "yes") {
        index = -1;
      }
    }
    
    $("#playerOneScore").text(score);
  }

}


//--------------Front End--------------//
$(document).ready(function() {
  $("form.playerInputs").submit(function(event){
    event.preventDefault();
    //THIS TAKES IN USER INPUT NAME AND AGE
    var userNameOne = $("#playerOneName").val();
    var userAgeOne = $("#playerOneAge").val();
    var userNameTwo = $("#playerTwoName").val();
    var userAgeTwo = $("#playerTwoAge").val();

    var playerOne = new Player(userNameOne, userAgeOne);
    var playerTwo = new Player(userNameTwo, userAgeTwo);
    // playerOne.roll(1,7);
    // alert(playerOne.roll(1,7));
    // playerOne.determine(playerOne.roll(1,7));
    // playerTwo.roll();
    playerOne.playerTurn();


    //USER TWO INPUTS


  });
});
