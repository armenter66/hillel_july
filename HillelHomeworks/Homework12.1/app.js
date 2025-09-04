// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const mainBtn = document.querySelector('.mainBtn');

mainBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const userUrl = prompt('Enter url to open in new window!');

	document.querySelector('.secondBtn').addEventListener('click', (e) => {
		e.preventDefault();
		window.open(userUrl);
	});
});
