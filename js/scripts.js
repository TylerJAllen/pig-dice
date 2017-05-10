
//--------------Back End--------------//
//Player constructor
function Player(name, age) {
  this.pname = name;
  this.age = age;
  this.score = 0;
}

//Method to roll dice
Player.prototype.roll = function(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + 1);
}

//--------------Front End--------------//
$(document).ready(function() {
  $("form.playerOneInputs").submit(function(event){
    event.preventDefault();
    //THIS TAKES IN USER INPUT NAME AND AGE
    var userNameOne = $("#playerOneName").val();
    var userAgeOne = $("#playerOneAge").val();
    var playerOne = new Player(userNameOne, userAgeOne);
    var userNameTwo = $("#playerTwoName").val();
    var userAgeTwo = $("#playerTwoAge").val();
    var playerTwo = new Player(userNameTwo, userAgeTwo);

    //click pig 1 to roll dice
    $("#pig-1-btn").click(function(){
      var rollValue = playerOne.roll(1,7);

      if (rollValue === 1) {
        playerOne.score = 0;
      }
      else {
        playerOne.score += rollValue;
        if (playerOne.score >= 25) {
          $("#playerOneWinner").text(playerOne.pname + " is the winner!!!");
        }
      }
      $("#playerOneScore").text(playerOne.score);
    });

    //click pig 2 to roll dice
    $("#pig-2-btn").click(function(){
      var rollValue = playerTwo.roll(1,7);
       if (rollValue === 1) {
        playerTwo.score = 0;
      }
      else {
        playerTwo.score += rollValue;
        if (playerTwo.score >= 25) {
          $("#playerTwoWinner").text(playerTwo.pname + " is the winner!!!");
        }
      }
      $("#playerTwoScore").text(playerTwo.score);
    });
  });
});
