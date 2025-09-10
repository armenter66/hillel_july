//Пишемо свій слайдер зображень, який повинен:
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const prevBtn = document.querySelector('.slider__prev');
const nextBtn = document.querySelector('.slider__next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const dotsWrapper = document.querySelector('.dots');

slides.forEach((slide, index) => {
	const dot = document.createElement('a');
	if (index === 0) {
		dot.classList.add('active');
	}
	dot.addEventListener('click', () => showSlide(index));
	dotsWrapper.appendChild(dot);
});

const dots = document.querySelectorAll('.dots a');

let currentIndex = 0;

function showSlide(index) {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});

	dots.forEach((dot) => {
		dot.classList.remove('active');
	});

	slides[index].classList.add('active');
	dots[index].classList.add('active');

	currentIndex = index;

	prevBtn.style.display = index === 0 ? 'none' : 'block';
	nextBtn.style.display = index === slides.length - 1 ? 'none' : 'inline-block';
}

nextBtn.addEventListener('click', () => {
	if (currentIndex < slides.length - 1) {
		showSlide(currentIndex + 1);
	}
});

prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		showSlide(currentIndex - 1);
	}
});

showSlide(currentIndex);
