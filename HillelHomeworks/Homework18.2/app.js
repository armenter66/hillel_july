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
	slides[currentIndex].classList.remove('active');
	dots[currentIndex].classList.remove('active');

	slides[index].classList.add('active');
	dots[index].classList.add('active');

	currentIndex = index;
}

function nextSlide() {
	let nextIndex = currentIndex + 1;
	if (nextIndex >= slides.length) {
		nextIndex = 0;
	}

	showSlide(nextIndex);
}

function prevSlide() {
	let prevIndex = currentIndex - 1;
	if (prevIndex < 0) {
		prevIndex = slides.length - 1;
	}

	showSlide(prevIndex);
}

const loopTime = 3000;
let intervalID = setInterval(nextSlide, loopTime);

function resetInterval() {
	clearInterval(intervalID);
	intervalID = setInterval(nextSlide, loopTime);
}

nextBtn.addEventListener('click', () => {
	nextSlide();
	resetInterval();
});

prevBtn.addEventListener('click', () => {
	prevSlide();
	resetInterval();
});

showSlide(currentIndex);

// const intervalID = setInterval(nextSlide, 500);

// nextBtn.addEventListener('click', () => {
// 	nextSlide();
// 	clearInterval(intervalID);
// 	intervalID = setInterval(nextSlide, 500);
// });

// prevBtn.addEventListener('click', prevSlide);
