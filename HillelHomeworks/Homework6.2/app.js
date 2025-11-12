// Given an array [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let startArray = [
	16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76,
	-4, 12, -35, 4, 47,
];

// Find the sum and number of positive elements.
let sumOfPositive = 0;
let countOfPositive = 0;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] > 0) {
		sumOfPositive += startArray[i];
		countOfPositive++;
	}
}

console.log(`Sum of positive elements: ${sumOfPositive}`);
console.log(`Number of positive elements: ${countOfPositive}`);

// Find the minimum (smallest) element of the array and its index.
let minValue = startArray[0];
let minValueIndex = 0;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] < minValue) {
		minValue = startArray[i];
		minValueIndex = i;
	}
}

console.log(`Minimum value: ${minValue}, Index: ${minValueIndex}`);

// Find the maximum (largest) element of the array and its index

let maxValue = startArray[0];
let maxValueIndex = 0;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] > maxValue) {
		maxValue = startArray[i];
		maxValueIndex = i;
	}
}

console.log(`Maximum value: ${maxValue}, Index: ${maxValueIndex}`);

// Determine the number of negative (negative) elements of the array

let numOfNegative = 0;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] < 0) {
		numOfNegative++;
	}
}

console.log(`Number of negative elements: ${numOfNegative}`);

// Find the number of odd positive elements

let numOfPositiveOdd = 0;
let sumOfPositiveOdd = 0;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] > 0 && startArray[i] % 2 !== 0) {
		numOfPositiveOdd++;
		// Find the sum of odd positive elements
		sumOfPositiveOdd += startArray[i];
	}
}
console.log(
	`Number of odd positive: ${numOfPositiveOdd}, Sum of odd positive: ${sumOfPositiveOdd}`
);

// Find the number of even positive elements

let numOfPositiveEven = 0;
let sumOfPositiveEven = 0;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] > 0 && startArray[i] % 2 === 0) {
		numOfPositiveEven++;
		// Find the sum of even positive elements
		sumOfPositiveEven += startArray[i];
	}
}
console.log(
	`Number of even positive: ${numOfPositiveEven}, Sum of even positive: ${sumOfPositiveEven}`
);

// Find the product of all positive elements

let productOfElements = 1;

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] > 0) {
		productOfElements *= startArray[i];
	}
}

console.log(`Product of positive elements: ${productOfElements}`);

// Change all elements of the array except the largest to 0

for (let i = 0; i < startArray.length; i++) {
	if (startArray[i] < maxValue) {
		startArray[i] = 0;
	}
}

console.log(`New array: ${startArray}`);
