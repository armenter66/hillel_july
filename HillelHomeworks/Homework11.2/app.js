// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

const container = document.querySelector('.container');
const mainBtn = document.querySelector('.mainBtn');
const textBlock = document.querySelector('.textBlock');
let clicked = false;

mainBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (!clicked) {
		textBlock.style.color = 'red';
	} else {
		textBlock.style.color = '#000';
	}

	clicked = !clicked;
});
