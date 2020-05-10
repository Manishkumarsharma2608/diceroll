function roll() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
function checkBox() {
  var checkBox = document.querySelector(".chkBox1");
  var diceImageTwo = document.querySelector(".dice2");
  var heading = document.querySelector("h1");
  if (checkBox.checked == true) {
    diceImageTwo.style.visibility = "hidden";
    heading.style.visibility = "hidden";
  } else {
    diceImageTwo.style.visibility = "visible";
    heading.style.visibility = "visible";
  }
}
