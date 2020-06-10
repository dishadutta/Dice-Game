//for dice1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var ranDiceImgSrc1 = "images/dice" + randomNum1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", ranDiceImgSrc1);

//for dice2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var ranDiceImgSrc2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", ranDiceImgSrc2);

//comparison
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
