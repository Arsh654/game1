
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random no. from 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "/images/" + randomDiceImage1; //our images directory is images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //selecting 1st image tag

image1.setAttribute("src" , randomImageSource1); //setting attirbutes to that image

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "/images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "TRY AGAIN";
}
