var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var diceImages = document.querySelectorAll("img");
diceImages[0].setAttribute("src","images/dice"+randomNumber1+".png");
diceImages[1].setAttribute("src","images/dice"+randomNumber2+".png");
var p1Win = "🚩Player 1 Wins!";
var p2Win = "Player 2 Wins!🚩";
var pDraw = "🎌Draw!🎌";
// var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var topHeader = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  topHeader.innerHTML = p1Win;
  // for (i = 0; i <= p1Win.length; i++) {
  //   console.log(topHeader[i]);
  //   var colorTemp = colors[0];
  //   document.querySelector("h1").innerHTML.replace(topHeader[i],"<span style='color:'+'colorTemp;'>topHeader[i]</span>");
  // }
} else if (randomNumber1 < randomNumber2 ){
  topHeader.innerHTML = p2Win;
} else {
  topHeader.innerHTML = pDraw;
}
