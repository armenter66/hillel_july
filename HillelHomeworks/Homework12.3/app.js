// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення, отримане випадковим чином (Math.random)

const container = document.querySelector('.container');
const imgBtn = document.querySelector('.imgBtn');
const img = document.querySelector('.image');

const imageArr = [
	'1.jpg',
	'2.jpeg',
	'3.jpeg',
	'4.webp',
	'5.jpeg',
	'6.jpeg',
	'7.jpg',
	'8.webp',
	'9.webp',
];

function randomImg() {
	const randomIndex = Math.floor(Math.random() * imageArr.length);
	img.src = imageArr[randomIndex];
}

imgBtn.addEventListener('click', (e) => {
	e.preventDefault();
	randomImg();
});
