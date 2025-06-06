'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 'gg';
// document.querySelector('.guess').textContent = 'sdfhlsdf';
// console.log(document.querySelector('.guess').textContent);

let secert = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let HScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (Score >= 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Enter Valid Data';
    }

    if (guess === secert) {
      document.querySelector('.number').textContent = secert;
      document.querySelector('.message').textContent = 'Woohoo Correct Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '40rem';
      if (Score > HScore) HScore = Score;
      document.querySelector('.highscore').textContent = HScore;
    } else if (guess > secert) {
      document.querySelector('.message').textContent = 'Too High';
      Score--;
      document.querySelector('.score').textContent = Score;
    } else if (guess < secert) {
      document.querySelector('.message').textContent = 'Too Low';
      Score--;
      document.querySelector('.score').textContent = Score;
    }
  } else {
    document.querySelector('.message').textContent = 'You LOSEEE!!!!!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  secert = Math.trunc(Math.random() * 20) + 1;
  Score = 20;
  document.querySelector('.score').textContent = Score;
});
