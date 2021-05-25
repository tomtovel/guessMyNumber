'use strict';
// Initial Settings
let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let score = 20;
let guess;
// Restart Game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start guessing...';
});
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (!guess || guess > 1000 || guess < 1) {
    // Invalid Number

    document.querySelector('.message').textContent = '⛔ Invalid Number';
  } else if (guess === secretNumber) {
    // Correct number!
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = guess;
    if (Number(document.querySelector('.highscore').textContent) < score)
      document.querySelector('.highscore').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      // Decrease Score
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Guess too high...';
    } else {
      // Game Over
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '❌ Game Over!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      // Decrease Score
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Guess too low...';
    } else {
      // Game Over
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '❌ Game Over!';
    }
  }
});

function scoreCheck() {}
