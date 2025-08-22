// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const numbersArr = [
	25, -67, 88, 0, -12, 45, 99, -100, 13, 7, -44, 56, 22, -5, 71, 83, -29, 64,
	-87, 41, 38, -14, 92, 17, 3, -33, 77, -60, 12, -8,
];

const evenNumbers = numbersArr.filter((number) => {
	if (number % 2 === 0) {
		return number;
	}
});

console.log(numbersArr);

console.log(`Only even numbers: ${evenNumbers.join(', ')}`);
