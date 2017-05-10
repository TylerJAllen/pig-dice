
//Back End
function Player(name, age, score) {
  this.name = name;
  this.age = age;
  this.score = score;
}

Player.prototype.roll = function(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + 1);
}

Player.prototype.determine = function(result) {
  alert(result);
  if (result === 1) {
    alert("You rolled One");
    return false;
  } else if (result >= 2) {
    var chosen = prompt("Would you like to keep rolling?");

    if (chosen === "yes") {
      result += this.roll(1,7);
      console.log(result);
    }
  }
}

Player.prototype.playerTurn = function (){

}


//Front End
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
    playerOne.determine(playerOne.roll(1,7));
    // playerTwo.roll();



    //USER TWO INPUTS


  });
});
