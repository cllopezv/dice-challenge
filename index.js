/* ----------------------------- Dice Challenge ----------------------------- */

// In the Dicee project, there is a folder called images, add the images of dice6.png as 
//the source to both of the <img> elements.

/* Player 1 */
document.querySelectorAll(".dice img")[0].src = "images/dice6.png"
/* Player 2 */
document.querySelectorAll(".dice img")[1].src = "images/dice6.png"

// Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


//Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.

document.querySelectorAll(".dice img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png")

//Do the same for the right hand side image element. 

document.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png")

//Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

heading = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    heading.textContent = "Player 1 Win! 🚩"
}else if(randomNumber2 > randomNumber1){
    heading.textContent = "Player 2 Win! 🚩"
}else{
    heading.textContent = "It's a Draw 🤝"
}