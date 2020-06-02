var buttonArray = [];
var imgArray = [];

var buttonFront = document.getElementById("front");
buttonArray[0] = buttonFront;
var buttonBack = document.getElementById("back");
buttonArray[1] = buttonBack;

var imgFront = new Image();
imgArray[0] = imgFront;
var imgBack = new Image();
imgArray[1] = imgBack;
var imgW = 100;
var imgH = 100;
var opasity = 0;
var front = true;
var imgToFlip;
var randNum;

function init() {
	imgFront.src = "static/img/images.jpg";
	imgBack.src = "static/img/back.jpg";
	//window.requestAnimationFrame(showCard);
	setUpGame();
}

function setUpGame(){
	randNum = Math.floor(Math.random() * 2);
	window.requestAnimationFrame(showCard);
}

	

function showCard() {
	var ctx = document.getElementById("myCanvas").getContext("2d");

	//ctx clearRect(0, 0, 300, 300);
	ctx.save();
	
	opasity += 0.002;
	ctx.globalAlpha = opasity;
	ctx.drawImage(imgArray[randNum], (300 - imgW) / 2, (300 - imgH) /2 , imgW, imgH);
	ctx.restore()
	
	if (opasity < 0.1) {
	 	window.requestAnimationFrame(showCard);
	} else {
		beginGame();
	}
}

function beginGame() {
	var ctx = document.getElementById("myCanvas").getContext("2d");
	var txt = "Begin"
	ctx.font = "20px Ariel";
	ctx.fillText(txt, (300 - ctx.measureText(txt).width) / 2, 50);
	imgToFlip = imgFront;
}

function evalInput() {

	if (front == true) {
		imgToFlip = imgFront;
		front = false;
	} else {
		imgToFlip = imgBack;
		front = true;
	}
	draw();
	
}

function draw() {

	var ctx = document.getElementById("myCanvas").getContext("2d");
  	ctx.clearRect(0, 0, 300, 300); // clear canvas
  	ctx.save()
  	imgW -= 3
  	ctx.drawImage(imgToFlip, (300 - imgW) / 2, (300 - imgH) /2 , imgW, imgH);
  	ctx.restore();

  	if (imgW > 0) {
  		window.requestAnimationFrame(draw);
  	} else {
  		if (imgToFlip == imgFront) {
  			imgToFlip = imgBack;
  		} else {
  			imgToFlip = imgFront;
  		}
  		window.requestAnimationFrame(flipBack);
  	}
}

function flipBack() {
	
	var ctx = document.getElementById("myCanvas").getContext("2d");
	ctx.save();
	imgW += 3;
	ctx.drawImage(imgToFlip, (300 - imgW) / 2, (300 - imgH) /2 , imgW, imgH);
  	ctx.restore();

  	if (imgW < 100) {
  		window.requestAnimationFrame(flipBack);
  	}
}

init();






// function draw() {
//   var ctx = document.getElementById('myCanvas').getContext('2d');
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       ctx.save();
//       ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
//       ctx.translate(5 + j * 50, 10 + i * 50);
//       ctx.fillRect(0, 0, 25, 25);
//       ctx.restore();
//     }
//   }
// }






