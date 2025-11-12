const container = document.querySelector('.container');

let minutes = 1;
let seconds = 25;

let totalSeconds = Math.max(0, minutes * 60 + seconds);

function addZero(zero) {
	return zero < 10 ? '0' + zero : zero;
}

function changeTimer() {
	const min = Math.floor(totalSeconds / 60);
	const sec = totalSeconds % 60;
	if (container) {
		container.textContent = `${addZero(min)}:${addZero(sec)}`;
	}
}

changeTimer();

const intervalID = setInterval(() => {
	totalSeconds -= 1;

	if (totalSeconds < 0) {
		if (container) {
			container.textContent = '00:00';
			clearInterval(intervalID);
			return;
		}
	}

	changeTimer();
}, 1000);
