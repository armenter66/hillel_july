//Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.

const tasks = document.querySelector('.tasks');

tasks.addEventListener('click', (event) => {
	if (event.target && event.target.nodeName === 'BUTTON') {
		const item = event.target.parentNode;
		item.remove();
	}
});

document.querySelector('.addBtn').addEventListener('click', (e) => {
	e.preventDefault();
	const myInput = document.querySelector('input');
	const inputValue = myInput.value;
	if (inputValue === ' ') {
		return;
	}

	const newItem = document.createElement('li');
	const deleteBtn = document.createElement('button');

	deleteBtn.classList.add('deleteBtn');
	deleteBtn.textContent = 'Delete';
	newItem.classList.add('tasks__item');
	newItem.textContent = inputValue;
	newItem.appendChild(deleteBtn);

	tasks.appendChild(newItem);
	myInput.value = '';
});
