// 1) Bootstrap:

// Вивести на сторінку кнопку (застосувати стилі бутстрапа), при натисканні на яку, відкривається дефолтне модальне вікно із деякими даними
// Повісити на цю кнопку Tooltip із довільним текстом
// Створити поруч ще одну кнопку, при натисканні на яку, відображається бутстрапівський алерт. При повторному натисканні - він зникає

const myModal = new bootstrap.Modal(document.getElementById('myModal'));

const exampleEl = document.getElementById('tooltip');
const tooltip = new bootstrap.Tooltip(exampleEl);

const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
	const wrapper = document.createElement('div');
	wrapper.innerHTML = [
		`<div class="alert alert-${type} alert-dismissible" role="alert">`,
		`<div>${message}</div>`,
		'</div>',
	].join('');

	alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
alertTrigger.addEventListener('click', () => {
	const existingAlert = alertPlaceholder.querySelector('.alert');
	if (existingAlert) {
		existingAlert.remove();
	} else {
		appendAlert('Nice, you triggered this alert message!', 'danger');
	}
});

// 2) Moment.js

// Вивести дату вашого народження в довільному форматі із використанням бібліотеки moment.js
// Отримати від користувача дату його народження у форматі ДД/ММ/РРРР та через moment.js перетворити її в інший формат (напр., РРРР-ММ-ДД)
// реалізувати перевірку за допомогою регулярних виразів на коректність користувацького вводу
// якщо формат невірний - вивести помилку на сторінку (використати bootstrap стилі)

console.log(moment('10.11.1997', 'DD.MM.YYYY').format('MM-DD-YYYY'));

const dateOfBirth = prompt('Enter your date of birth in format DD/MM/YYYY');
console.log(moment(dateOfBirth, 'DD/MM/YYYY').format('YYYY/MM/DD'));

const resultContainer = document.createElement('div');
document.body.appendChild(resultContainer);
if (!dateOfBirth) {
	alert('Cancel, please refresh and enter your date');
} else {
	const regex = /^\d{2}\/\d{2}\/\d{4}$/;
	const resultContainer = document.createElement('div');
	document.body.appendChild(resultContainer);

	if (
		regex.test(dateOfBirth) &&
		moment(dateOfBirth, 'DD/MM/YYYY', true).isValid()
	) {
		const result = moment(dateOfBirth, 'DD/MM/YYYY').format('YYYY/MM/DD');
		resultContainer.innerHTML = `
			<div class="alert alert-success" role="alert">
				Your date of Birth: <strong>${result}</strong>
			</div>
		`;
	} else {
		resultContainer.innerHTML = `
			<div class="alert alert-danger" role="alert">
				Invalid date format! Please use DD/MM/YYYY.
			</div>
		`;
	}
}
