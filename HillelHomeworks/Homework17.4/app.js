class House {
	apartments = new Map();

	addApartment(obj) {
		this.apartments.set(obj.number, obj);
	}
}

House.prototype.createHouse = function () {
	this.apartments.forEach((apartment, number) => {
		console.log(`Apartment ${number}: ${apartment.roomsAmount} rooms`);
		if (apartment.people.size > 0) {
			console.log('Peoples:');
			apartment.people.forEach((person) => {
				console.log(person.name);
			});
		} else {
			console.log(' No peoples in apartment');
		}
	});
};
class Apartment {
	constructor(number, roomsAmount, people = []) {
		this.number = number;
		this.roomsAmount = roomsAmount;
		this.people = new Set(people);
	}

	addPerson(person) {
		if (person && person.name) {
			this.people.add(person);
		} else {
			console.log('Name doesnt exist');
		}
	}
}
class Person {
	constructor(name) {
		this.name = name;
	}
}

const people = [
	new Person('Oleg'),
	new Person('Alex'),
	new Person('Olga'),
	new Person('Victor'),
	new Person('Maks'),
	new Person('Olena'),
	new Person('Igor'),
];

const apartments = [
	new Apartment(102, 3, people),
	new Apartment(103, 1, people),
	new Apartment(105, 2, people),
	new Apartment(110, 4, people),
	new Apartment(122, 3, people),
	new Apartment(104, 4, people),
	new Apartment(131, 2, people),
];

const bigHouse = new House();

apartments.forEach((app) => {
	bigHouse.addApartment(app);
});

console.log(bigHouse);

bigHouse.createHouse();
