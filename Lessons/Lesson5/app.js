// Task 1
let numbersFromTenToTwenty = ' ';

for (let i = 10; i <= 20; i++) {
	numbersFromTenToTwenty += i;
	if (i < 20) {
		numbersFromTenToTwenty += ', ';
	}
}

console.log(numbersFromTenToTwenty);

// Task 2

let numbersSquared = '';

for (let i = 10; i <= 20; i++) {
	numbersSquared += i ** 2;
	if (i < 20) {
		numbersSquared += ', ';
	}
}
console.log(numbersSquared);

// Task 3

let tableOfMultiply = '';

for (let i = 1; i <= 10; i++) {
	tableOfMultiply += `${i} * 7 = ${i * 7}`;
	if (i < 10) {
		tableOfMultiply += '; ';
	}
}

console.log(tableOfMultiply);

// Task 4

let sumFromOneToFive = 0;

for (let i = 1; i <= 15; i++) {
	sumFromOneToFive += i;
}

console.log(sumFromOneToFive);

// Task 5

let productOfNumbers = 1;

for (let i = 15; i < 35; i++) {
	productOfNumbers *= i;
}

console.log(productOfNumbers);

// Task 6

let sumOfNumbers = 0;

for (let i = 1; i <= 500; i++) {
	sumOfNumbers += i;
}

let average = sumOfNumbers / 500;

console.log(average);

// Task 7

let sumOfEvenNumb = 0;

for (let i = 30; i <= 80; i++) {
	if (i % 2 === 0) {
		sumOfEvenNumb += i;
	}
}
console.log(sumOfEvenNumb);

// Task 8

let numbMultipleByThree = '';

for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		numbMultipleByThree += i + ', ';
	}
}

console.log(numbMultipleByThree);

// Task 9

let naturalNumb = parseInt(prompt('Enter a natural number'));
let numbsDivisor = '';
let evenCount = 0;
let evenSum = 0;

for (let i = 1; i <= naturalNumb; i++) {
	if (naturalNumb % i === 0) {
		numbsDivisor += i + ', ';

		if (i % 2 === 0) {
			evenCount++;
			evenSum += i;
		}
	}
}

console.log(numbsDivisor);
console.log(evenCount);
console.log(evenSum);

// Task 10

let tableOfMultiple = '';

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		tableOfMultiple += `${i} * ${j} = ${i * j}; \n`;
	}
	tableOfMultiple += '\n';
}

console.log(tableOfMultiple);
