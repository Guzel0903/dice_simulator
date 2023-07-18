var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var img1 = document.querySelector(".img1");
var newSrc = './images/dice' + randomNumber1 + '.png';
img1.setAttribute("src", newSrc);

var img2 = document.querySelector(".img2");
var newSrc = './images/dice' + randomNumber2 + '.png';
img2.setAttribute("src", newSrc);

/*
Change the text in the h1, 
(which currently says Refresh Me) to show 
which user won or if there was a draw depending 
on the dice values of player 1 (left) and player 2 (right).

Hint: You'll need to use an if statement, querySelector() and 
the innerHTML property to change the text in the h1.*/

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!! 🚩";
}




