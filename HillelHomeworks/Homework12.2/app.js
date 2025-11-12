// Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу, який відслідковуватиме кліки на всіх кнопках.

const container = document.querySelector('.container');
const firstBtn = document.querySelector('.mainBtn');

container.addEventListener('click', (event) => {
	if (event.target && event.target.nodeName === 'BUTTON') {
		const buttonName = event.target.textContent;
		console.log(`Clicked button: ${buttonName}`);
	}
});
