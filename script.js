'use strict';

// Select elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');

// Set initial values

let playing, currentScore, scores;
let activePlayer = 0;

// Function to set new game values
const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  playing = true;
  currentScore = 0;
  scores = [0, 0];
};

// Function to switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerActive0.classList.toggle('player--active');
  playerActive1.classList.toggle('player--active');
};

// LETS PLAY
init();
if (playing) {
  // Roll the dice functionality
  btnRoll.addEventListener('click', function () {
    // Generate random dice number
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    // Show dice image
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    // Check for number 1 to switch player
    if (randomDice !== 1) {
      // Accumulate current score
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  });

  // Hold functionality and check for winner
  btnHold.addEventListener('click', function () {
    // Add current score to total score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if score is already over 100 (100 wins) to finish game
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // If not switch to next player
      switchPlayer();
    }
  });
}

// New game functionality
btnNew.addEventListener('click', function () {
  init();

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
