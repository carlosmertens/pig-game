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
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerActive0.classList.toggle('player--active');
    playerActive1.classList.toggle('player--active');
  }
});
