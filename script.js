let count1 = 0;
let count2 = 0;
let score1 = 0;
let score2 = 0;
let timeLeft = 20;
let timer;
let gameActive = false;

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const count1Display = document.getElementById('count1');
const count2Display = document.getElementById('count2');
const score1Display = document.getElementById('score1');
const score2Display = document.getElementById('score2');
const timerDisplay = document.getElementById('timer');
const resultDisplay = document.getElementById('result');
const restartBtn = document.getElementById('restart');
const slapSound = document.getElementById('slapSound');

function startGame() {
  gameActive = true;
  count1 = 0;
  count2 = 0;
  count1Display.textContent = count1;
  count2Display.textContent = count2;
  resultDisplay.textContent = '';
  timeLeft = 20;
  timerDisplay.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      endRound();
    }
  }, 1000);
}

function endRound() {
  gameActive = false;
  if (count1 > count2) {
    score1++;
    resultDisplay.textContent = 'اللاعب 1 يصفع اللاعب 2!';
    slapSound.play();
  } else if (count2 > count1) {
    score2++;
    resultDisplay.textContent = 'اللاعب 2 يصفع اللاعب 1!';
    slapSound.play();
  } else {
    resultDisplay.textContent = 'تعادل!';
  }
  score1Display.textContent = score1;
  score2Display.textContent = score2;
  if (score1 === 3 || score2 === 3) {
    resultDisplay.textContent += ' النهاية!';
    btn1.disabled = true;
    btn2.disabled = true;
  } else {
    setTimeout(startGame, 3000);
  }
}

btn1.addEventListener('click', () => {
  if (gameActive) {
    count1++;
    count1Display.textContent = count1;
  }
});
btn2.addEventListener('click', () => {
  if (gameActive) {
    count2++;
    count2Display.textContent = count2;
  }
});
restartBtn.addEventListener('click', () => {
  score1 = 0;
  score2 = 0;
  score1Display.textContent = score1;
  score2Display.textContent = score2;
  btn1.disabled = false;
  btn2.disabled = false;
  startGame();
});
startGame();
