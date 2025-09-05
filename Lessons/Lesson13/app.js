// Реалізувати форму для реєстрації на сайті
// Після натискання кнопки, замість форми відображається “табличка” з даними, що тільки що ввів користувач.

const languages = {
	EN: 'English',
	UA: 'Ukrainian',
	PO: 'Polish',
	AM: 'Armenian',
};

const genders = {
	FE: 'Female',
	MA: 'Male',
};

const container = document.querySelector('.container');

document.querySelector('button').addEventListener('click', () => {
	const form = document.forms.mainForm;

	const nameValue = form.FirstName.value;
	const birth = form.date.value;
	const address = form.address.value;
	const gender = form.gender.value;
	const cityIndex = form.city.selectedIndex;
	const cityName = form.city.options[cityIndex].textContent;

	const langs = [];
	for (let i = 0; i < form.langs.length; i++) {
		if (form.langs[i].checked) {
			langs.push(form.langs[i].value);
		}
	}

	container.innerHTML = `
		Name: ${nameValue} <br> 
		Date: ${birth} <br>
		Gender: ${genders[gender]} <br> 
		Address: ${address} <br> 
		City: ${cityName} <br>
		Languages: ${langs.map((value) => languages[value])}
	`;
});
