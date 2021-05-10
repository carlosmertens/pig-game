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

// Set initial values
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;

// Roll the dice functionality
btnRoll.addEventListener('click', function () {
  // Generate random dice number
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  // Show dice image
  dice.classList.remove('hidden');
  dice.src = `dice-${randomDice}.png`;

  // Check for number 1 to switch player
  if (dice !== 1) {
    // Accumulate current score
    currentScore += randomDice;
    current0.textContent = currentScore; // TODO: Check for player
  } else {
    // Switch player
  }
});
