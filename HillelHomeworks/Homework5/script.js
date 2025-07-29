// Task 1

let numbersList = '';

for (let i = 20; i <= 30; i += 0.5) {
	numbersList += i + ', ';
}

console.log(numbersList);

// Task 2

let dollar = 42;

let dollarList = '';

for (let i = 10; i <= 100; i += 10) {
	dollarList += i * dollar + ', ';
}

console.log(dollarList);

// Task 3

let integerNum = parseInt(prompt('Enter a integer value'));
let integerList = '';

for (let i = 1; i <= 100; i++) {
	if (i ** 2 <= integerNum) {
		integerList += i + ', ';
	}
}

console.log(integerList);

// Task 4

let integerNum2 = parseInt(prompt('Enter a integer value!'));

let isInteger = true;

if (integerNum2 <= 1) {
	isInteger = false;
} else {
	for (let i = 2; i < integerNum2; i++) {
		if (integerNum2 % i === 0) {
			isInteger = false;
			break;
		}
	}
}

if (isInteger) {
	console.log(integerNum2 + ' is a integer number');
} else {
	console.log(integerNum2 + ' isnt a integer number');
}

// Task 5

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

// for (let i = 1; i <= numberToCheck; i++) {
// 	if (i === numberToCheck) {
// 		isPower = true;
// 		break;
// 	} else {
// 		i *= 3;
// 		console.log(i, numberToCheck);
// 	}
// }

if (isPower) {
	console.log(numberToCheck + ' can be obtained as a power of 3');
} else {
	console.log(numberToCheck + ' cant be obtained as a power of 3');
}
