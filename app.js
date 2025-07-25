//Task 1
let firstNum = parseInt(prompt('Enter first number!'));
let secondNum = parseInt(prompt('Enter second number'));

if (firstNum > secondNum) {
	console.log('First number is bigger');
} else if (firstNum < secondNum) {
	console.log('Second num is bigger');
} else {
	console.log('The numbers is equal');
}

//Task 2

let kmNum = parseInt(prompt('Enter distance in kilometers'));
let feetNum = parseInt(prompt('Enter distance in feet'));

let metersKm = kmNum * 1000;
let metersFeet = feetNum * 0.305;

if (metersKm < metersFeet) {
	console.log('Km is shorter');
} else {
	console.log('Feet is shorter');
}

// Task 3

let a = parseInt(prompt('Enter the first num'));
let b = parseInt(prompt('Enter the second num'));

if (b % a === 0) {
	console.log('a is divisor of b');
} else if (a % b === 0) {
	console.log('b is divisor of a');
} else {
	console.log('None of numbers is divisor of other');
}

// Task 4

let randomNum = parseInt(prompt('Enter the number!'));
let lastDigit = randomNum % 10;

console.log(lastDigit % 2 === 0 ? 'last digit is even' : 'Last digit is odd');
console.log(lastDigit);

// Task 5

let doubleNum = parseInt(prompt('Enter a douuble digit number'));

let secondDigit = doubleNum % 10;
doubleNum = (doubleNum - secondDigit) / 10;

let firstDigit = doubleNum % 10;

if (firstDigit > secondDigit) {
	console.log(`First digit bigger: ${firstDigit}`);
} else if (secondDigit > firstDigit) {
	console.log(`Second digit bigger: ${secondDigit}`);
} else {
	console.log('numbers is equal');
}

// Task 6

let tripleNum = parseInt(prompt('Enter a three-digit number'));

let thirdDigit = tripleNum % 10;
tripleNum = (tripleNum - thirdDigit) / 10;

let secondDigit2 = tripleNum % 10;
tripleNum = (tripleNum - secondDigit2) / 10;

let firstDigit2 = tripleNum % 10;

let sum = thirdDigit + secondDigit2 + firstDigit2;

sum % 2 === 0 ? console.log('Sum is even') : console.log('Sum is not even');
sum % 5 === 0
	? console.log('Sum is divisible by 5')
	: console.log('Sum is not divisible by 5');

let productOfDigits = thirdDigit * secondDigit2 * firstDigit2;

productOfDigits > 100
	? console.log('Product is bigger')
	: console.log("Product isn't bigger");

if (
	thirdDigit === secondDigit2 &&
	secondDigit2 === firstDigit2 &&
	thirdDigit === firstDigit2
) {
	console.log('All the digits are same');
} else {
	console.log('All the digits are not same');
}

if (
	thirdDigit === secondDigit2 ||
	secondDigit2 === firstDigit2 ||
	thirdDigit === firstDigit2
) {
	console.log('There are matches here');
} else {
	console.log('All digits are different');
}

// Task 7

let mainNumber = parseInt(prompt('Enter a six-digit number:'));

let digit6 = mainNumber % 10;
mainNumber = (mainNumber - digit6) / 10;

let digit5 = mainNumber % 10;
mainNumber = (mainNumber - digit5) / 10;

let digit4 = mainNumber % 10;
mainNumber = (mainNumber - digit4) / 10;

let digit3 = mainNumber % 10;
mainNumber = (mainNumber - digit3) / 10;

let digit2 = mainNumber % 10;
mainNumber = (mainNumber - digit2) / 10;

let digit1 = mainNumber % 10;

if (digit1 === digit6 && digit2 === digit5 && digit3 === digit4) {
	console.log('number is mirror');
} else {
	console.log('number is not a mirror');
}
