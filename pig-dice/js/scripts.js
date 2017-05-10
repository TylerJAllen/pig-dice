function Player(name, age, score) {
  this.name = name;
  this.age = age;
  this.score = score;
}

// Player.prototype.score = function() {
//
// }

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + 1);

}
alert(getRandomInt(1, 7));

$(document).ready(function() {

this.playerOne = new Player(name, age, score);
this.playerTwo = new Player(name, age, score);



});
