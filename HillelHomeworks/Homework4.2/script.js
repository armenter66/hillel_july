let tripleNum = parseInt(prompt('Enter a three-digit number'));

let thirdDigit = tripleNum % 10;
tripleNum = (tripleNum - thirdDigit) / 10;

let secondDigit2 = tripleNum % 10;
tripleNum = (tripleNum - secondDigit2) / 10;

let firstDigit2 = tripleNum % 10;

if (
	thirdDigit === secondDigit2 &&
	secondDigit2 === firstDigit2 &&
	thirdDigit === firstDigit2
) {
	console.log('Усі цифри однакові');
} else {
	console.log('Всі цифри не є однаковими');
}

if (
	thirdDigit === secondDigit2 ||
	secondDigit2 === firstDigit2 ||
	thirdDigit === firstDigit2
) {
	console.log('Серед цих цифр є однакові');
} else {
	console.log('Всі цифри різні');
}
