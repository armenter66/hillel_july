import nameTest from './api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import moment from 'moment';
import '../style.scss';

console.log('nameTest:', nameTest);

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
