let myName = 'Armen';
console.log(typeof myName);

let age = 28;
console.log(typeof age);

let isArmen = true;
console.log(typeof isArmen);

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);

let emptyVariable = null;
console.log(typeof emptyVariable);

let undefinedVariable;
console.log(typeof undefinedVariable);

let myCar = {
	color: 'black',
	model: 'audi',
	maxSpeed: 300,
};
console.log(typeof myCar);

let uniqueID = Symbol('description');
console.log(typeof uniqueID);

let colorArray = ['red', 'black', 'white'];
console.log(typeof colorArray);

const sumOfNumbers = function (a, b) {
	console.log(a + b);
};
sumOfNumbers(13, 14);

console.log(typeof sumOfNumbers);
