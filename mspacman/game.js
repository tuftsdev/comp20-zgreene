
function init(){

var canvas = document.getElementById('game_canvas');
var ctx = canvas.getContext('2d');
var image = new Image();
image.src = "pacman10-hp-sprite.png";

image.addEventListener("load", function() {

// Draw game board
ctx.drawImage(image, 322, 0, 464, 137, 0, 0, 464, 137);

// Draw Ms. Pacman
ctx.drawImage(image, 83, 23, 13, 14, 37, 35, 13, 14);
	
}, false);

}