let userAge = prompt('Enter your age');
let userPlace = prompt('Enter the place where you currently live');
let favSport = prompt('Enter your favorite type of sport');

let ageMessage;
let placeMessage;
let sportMessage;

if (userAge === null) {
	ageMessage = "It's a pity you didn't want to enter your age";
} else {
	ageMessage = 'Your age is ' + userAge;
}

if (userPlace === null) {
	placeMessage = "It's a pity you didn't want to enter your city.\n";
} else {
	if (userPlace === 'Kyiv') {
		placeMessage = 'You live in the capital of Ukraine.';
	} else if (userPlace === 'London') {
		placeMessage = 'You live in the capital of the UK.';
	} else if (userPlace === 'Washington') {
		placeMessage = 'You live in the capital of the USA.';
	} else {
		placeMessage = 'You live in the ' + userPlace;
	}
}

if (favSport === null) {
	sportMessage = "It's a pity you didn't want to enter your favorite sport.";
} else {
	if (favSport === 'Football') {
		sportMessage = 'Cool! Do you want to become like Ronaldo?';
	} else if (favSport === 'Boxing') {
		sportMessage = 'Cool! Do you want to become like Oleksandr Usyk?';
	} else if (favSport === 'Basketball') {
		sportMessage = 'Cool! Do you want to become like Jordan?';
	} else {
		sportMessage = 'Your favorite sport is ' + favSport;
	}
}

alert(`${ageMessage}! ${placeMessage}! ${sportMessage}`);
