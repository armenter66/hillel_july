let integerNum = parseInt(prompt('Enter a integer value'));
let integerList = '';

for (let i = 1; i <= 100; i++) {
	if (i ** 2 <= integerNum) {
		integerList += i + ', ';
	}
}

console.log(integerList);
