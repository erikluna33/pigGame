'use strict';

// Selecting Elements
let player1Score = document.querySelector("#score--0");
let player2Score = document.querySelector("#score--1");
let player0CurrentScore = document.querySelector("#current--0");
let player1CurrentScore = document.querySelector("#current--1")
let currentScore = 0;
const player0Panel = document.querySelector(".player--0");
const player1Panel = document.querySelector(".player--1");
const dice = document.querySelector(".dice");

const rollBtn = document.querySelector(".btn--roll");
const hldBtn = document.querySelector(".btn--hold");
const newGameBtn = document.querySelector(".btn--new");
let activePlayer = 0;

const scores = [0,0];

// Starting conditions
player1Score.textContent=0;
player2Score.textContent=0;

dice.classList.add("hidden");


//Methods

//Rolling Dice
rollBtn.addEventListener("click", function(){
    const diceRoll = Math.trunc(Math.random()*6)+1;
    console.log(diceRoll);
    dice.classList.remove("hidden")
    dice.src = `dice-${diceRoll}.png`

    if(diceRoll === 1){
        document.querySelector(`.player--${activePlayer}`).style.backgroundColor="#B67C9F"
        document.getElementById(`current--${activePlayer}`).textContent=0
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0
        document.querySelector(`.player--${activePlayer}`).style.backgroundColor="#D5AFC2"
        

    }
    else{
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore
        // player0CurrentScore.textContent = currentScore;
       
    }
})

//Holding btn
hldBtn.addEventListener("click", function(){

    let sum = scores[`${activePlayer}`] + currentScore;
    scores[`${activePlayer}`] = sum;
    console.log(scores)
    
    document.getElementById(`score--${activePlayer}`).textContent = sum;

       if(document.getElementById(`score--${activePlayer}`).textContent >= 10){
        document.getElementById(`name--${activePlayer}`).textContent= "WINNER!"
        document.querySelector(`.player--${activePlayer}`).style.backgroundColor="B67C9F"
        console.log(activePlayer)
        
       }
    document.querySelector(`.player--${activePlayer}`).style.backgroundColor="#B67C9F"
    document.getElementById(`current--${activePlayer}`).textContent=0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).style.backgroundColor="#D5AFC2";

    
})


//New Game btn
newGameBtn.addEventListener("click", function(){
    currentScore = 0;
    activePlayer = 0;
    console.log(`Let's play a new game! The score is reset to ${currentScore}`)
    player1Score.textContent=0;
    player2Score.textContent=0;
    document.getElementById('name--0').textContent = "PLayer 1";
    document.getElementById('name--1').textContent = "PLayer 2";

    // let playerName = document.querySelector('.name');
    // playerName.textContent = `Player ${activePlayer}`;
    dice.classList.add("hidden");
    document.querySelector(`.player--0`).style.backgroundColor="#D5AEC2"
    document.querySelector(`.player--1`).style.backgroundColor="#B97C9C"

})