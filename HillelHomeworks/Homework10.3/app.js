// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const telBook = {
	contacts: [
		{ name: 'John Smith', phone: '+380931234567', email: 'john.smith@gmail.com' },
		{
			name: 'Mary Johnson',
			phone: '+380501112233',
			email: 'mary.johnson@gmail.com',
		},
		{ name: 'Alex Brown', phone: '+380971234567', email: 'alex.brown@yahoo.com' },
		{ name: 'Linda White', phone: '+380661112233', email: 'linda.white@ukr.net' },
		{
			name: 'James Miller',
			phone: '+380931111111',
			email: 'james.miller@gmail.com',
		},
		{
			name: 'Sophia Davis',
			phone: '+380503334455',
			email: 'sophia.davis@hotmail.com',
		},
		{
			name: 'Michael Wilson',
			phone: '+380993335577',
			email: 'michael.wilson@gmail.com',
		},
		{
			name: 'Emma Taylor',
			phone: '+380671234890',
			email: 'emma.taylor@yahoo.com',
		},
		{
			name: 'William Moore',
			phone: '+380991122334',
			email: 'william.moore@gmail.com',
		},
		{
			name: 'Olivia Anderson',
			phone: '+380632223344',
			email: 'olivia.anderson@outlook.com',
		},
		{
			name: 'David Thomas',
			phone: '+380931234890',
			email: 'david.thomas@gmail.com',
		},
		{
			name: 'Isabella Jackson',
			phone: '+380671112233',
			email: 'isabella.jackson@yahoo.com',
		},
		{
			name: 'Daniel Harris',
			phone: '+380951234567',
			email: 'daniel.harris@gmail.com',
		},
		{
			name: 'Mia Martin',
			phone: '+380631234567',
			email: 'mia.martin@icloud.com',
		},
		{
			name: 'Benjamin Lee',
			phone: '+380961234890',
			email: 'benjamin.lee@gmail.com',
		},
	],
	findContact(name) {
		return this.contacts.find(
			(contact) => contact.name.toLowerCase() === name.toLowerCase()
		);
	},
	getNewContact() {
		let name = prompt('Enter contact name');
		let phone = prompt('Enter phone number');
		let email = prompt('Enter contact email');
		this.contacts.push({ name, phone, email });
	},
};

console.log(telBook.findContact('Sophia Davis'));
telBook.getNewContact();

console.log(telBook);
