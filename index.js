function rollDice(){    
var randomVari1 = Math.floor((Math.random()*6)+1);
var randomVari2 = Math.floor((Math.random()*6)+1);
var ran1 = "./images/dice"+randomVari1+".png";
var ran2 = "./images/dice"+randomVari2+".png";
document.querySelector(".img1").setAttribute("src", ran1);
document.querySelector(".img2").setAttribute("src", ran2);

if (randomVari1 > randomVari2) {
    document.querySelector('h1').textContent = 'Player 1 Wins!!!!';
  } else if (randomVari2 > randomVari1) {
    document.querySelector('h1').textContent = 'Player 2 Wins!!!!';
  } else {
    document.querySelector('h1').textContent = "It's a Draw!";
  }
}
document.getElementById('rollButton').addEventListener('click', rollDice);


