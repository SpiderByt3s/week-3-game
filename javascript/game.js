<html>
    <head>
    <title> HELP </title> </
head> <body>

<h1> Psychic Game</h1>

<p id="wins"> Wins: </p>
<p id="losses">Losses:  </p>
<p id="guessLeft"> Guess left: </p>
<p id="lettersGuessed">Your Guesses so far: </p>

<script type = "text/javascript" >
var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s,
        t, u, v, w, x, y, z];
function randomLetter(){
  return letters[math.floor(math.random()* letters.length)];
}
var wins = 0;
var losses = 0;
var guessLeft = 9;
var randomLetter="";
var lettersGuessed;
var gameOver = false;


//var letterIndex = math.floor((math.random()* (letters.length-1)));

/*
initGame(){
  var letterIndex = math.floor(math.random()* letters.length);
  randomLetter=letters[letterIndex];
  gueeses = 0;
  lettersGuessed = [];
  gameOver = false;
  windows.addEventListener)keyup,eventKeyPressed,true);
  drawScreen();
}*/

function eventKeyPressed(e) {
  if (!gameOver){
    var letterPressed= string.fromCharCode(e.keyCode);
    letterPressed = letterPressed.toLowerCase();
    Guesses++;
    lettersGuessed.push(letterPressed);
    if(letterPressed == randomLetter){
      gameOver = true;
    }
  }
}

</script> </body > </html>
