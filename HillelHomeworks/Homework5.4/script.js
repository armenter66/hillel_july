let numberToCheck = parseInt(
	prompt('Enter an integer value to check a power of 3')
);

let powerValue = 1;
let isPower = false;

while (powerValue <= numberToCheck) {
	if (powerValue === numberToCheck) {
		isPower = true;
		break;
	}
	powerValue *= 3;
}

if (isPower) {
	console.log(numberToCheck + ' can be obtained as a power of 3');
} else {
	console.log(numberToCheck + ' cant be obtained as a power of 3');
}
