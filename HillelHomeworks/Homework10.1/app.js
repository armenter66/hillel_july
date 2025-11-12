// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
	name: '',
	age: '',
	placeOfLiving: '',
	getUserData() {
		const userName = prompt('Enter your name!');
		const userAge = parseInt(prompt('Enter your age!'));
		const userPlace = prompt('Enter your place of living!');

		this.name = userName;
		this.age = userAge;
		this.placeOfLiving = userPlace;
	},
	showUserData() {
		this.getUserData();
		console.log(
			`User name: ${this.name}, User age: ${this.age}, User place of living: ${this.placeOfLiving}`
		);
	},
};

user.showUserData();
