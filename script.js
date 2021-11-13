'use strict';

const guessEl = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');

const genNumber = () => Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (mes) {
  message.textContent = mes;
};

let secret = genNumber();
let score = 20;
let highscore = 0;

btnCheck.addEventListener('click', function () {
  const guessNumber = guessEl.value;

  if (guessNumber < 1 || guessNumber > 20) {
    displayMessage('⛔️ Wrong input!');
    return;
  }

  if (guessNumber < secret) {
    displayMessage('📉 Too low!');
    score--;
    scoreEl.textContent = score;
  } else if (guessNumber > secret) {
    displayMessage('📈 Too high!');
    score--;
    scoreEl.textContent = score;
  } else {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = secret;

    if (highscore < score) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  }
});

btnAgain.addEventListener('click', function () {
  displayMessage('Start guessing...');
  secret = genNumber();
  score = 20;
  scoreEl.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  guessEl.value = '';
});
