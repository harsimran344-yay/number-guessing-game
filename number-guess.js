
"use strict";

// Create a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Store the last result to show whether the answer is right or worng
const lastResult = document.getElementsByClassName('lastResult');
// To show the hint to user if the intered guess is lower or higher
const lowOrHi = document.getElementsByClassName('lowOrHi');
// guess Counter as user is given only 10 chances to enter the guess
let guessCounter = 1;
// reset button to reset the game ones result is declared, initially set hidden.
let resetButton = document.getElementsByClassName('guessReset');
let guessSubmit;

/*
 * To check the Guess - added validations and reset after 10 guesses.
 */
function checkGuessNumber() {
  // stores users guess value and convert to Number
  let userGuess = Number(document.getElementById("guessField").value);
  // previous guesses entered by user
  const guesses = document.getElementsByClassName('guesses');
  // get submit button DOM element
  guessSubmit = document.getElementsByClassName('guessSubmit');

  // check if the submit button is enabled, userGuess is between 1 and 100
  if(!guessSubmit[0].disabled && userGuess !== 0 && userGuess <= 100) {
    // guess counter is 1 when user clicks submit button and adds previous guesses content
    if (guessCounter === 1) {
      guesses[0].textContent = 'Previous guesses: '
    }
    // append user guesses to previous guesses content
    guesses[0].textContent += userGuess + ' ';

    // check if userguess is quals to generated random number and shows message in lastResult tag
    if (userGuess === randomNumber) {
      lastResult[0].textContent = 'Congratulations! You\'ve guessed it right!';
      lastResult[0].style.color = 'green';
      lowOrHi[0].textContent = '';
      // calls setGameOver function to allow user to play the game again
      setGameOver();
      // check on guess counter
    } else if (guessCounter === 10) {
      // when user guess counter is over and result content is set to game over and then user can reset the game
      lastResult[0].textContent = '!!GAME OVER!!';
      lowOrHi[0].textContent = '';
      setGameOver();
    } else {
      // when user guess is wrong, the result content is shown as wong guess
      lastResult[0].textContent = 'Wrong Guess!';
      lastResult[0].style.color = 'red';
      // check is user's guess is lower or higher than random number and content is shown accordingly
      if (userGuess < randomNumber) {
        lowOrHi[0].textContent = 'Your last guess was too low!';
      } else if (userGuess > randomNumber) {
        lowOrHi[0].textContent = 'Your last guess was too high!';
      }
    }

    guessCounter++;
    guessField.value = '';
    guessField.focus();
  } else {
    window.alert("Please enter a digit between 1 and 100")
  }
}

/*
* This function set game over ones user guess all answers wrong
* disable the user input field, and button disabled
* show user that reset button is available to restart the game
*/
function setGameOver() {
  guessField.disabled = true;
  guessSubmit[0].disabled = true;
  resetButton[0].style.visibility = 'visible';
}

/*
* This function reset the game when user guess the number or guess counter is over
* resets the guess counter to 1, informational messages' text to empty
* reset button is hidden, input and button fields are enabled to start the game
* generates new random number
*/
function resetGame() {
  guessCounter = 1;
  const resetParas = document.querySelectorAll('.item-d p');
  resetParas.forEach(p => {p.textContent = ''})

  resetButton[0].style.visibility = 'hidden';
  guessField.disabled = false;
  guessSubmit[0].disabled = false;
  guessField.value = '';
  guessField.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
