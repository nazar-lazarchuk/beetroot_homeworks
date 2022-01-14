let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Попередні припущення: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Вітаю! Ви вгадали!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Останній здогад був занадто низьким!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Останній здогад був занадто високим!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Почати нову гру';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
  }
  function resetGame() {
	guessCount = 1;
  
	let resetParas = document.querySelectorAll('.resultParas p');
	for (let i = 0 ; i < resetParas.length ; i++) {
	  resetParas[i].textContent = '';
	}
  
	resetButton.parentNode.removeChild(resetButton);
  
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();
  
	lastResult.style.backgroundColor = 'white';
  
	randomNumber = Math.floor(Math.random() * 100) + 1;
  }

