const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let randomPosition = square[Math.floor(Math.random() * 9)];

function randomSquare() {
	randomPosition.removeEventListener('mouseup', addResult);
	randomPosition.classList.remove('mole');
	randomPosition = square[Math.floor(Math.random() * 9)];
	randomPosition.addEventListener('mouseup', addResult);
	randomPosition.classList.add('mole');
	hitPosition = randomPosition.id;
}
function addResult() {
	if(randomPosition.id === hitPosition) {
		randomPosition.removeEventListener('mouseup', addResult);
		result++;
		score.textContent = result;
	}
}

function moveMole() {
	let timerId = null;
	timerId = setInterval(randomSquare, 800);
}

moveMole();

function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;
	if(currentTime === 0) {
		alert('Game over');
		location.reload()
	}
}

let timerId = setInterval(countDown, 1000);