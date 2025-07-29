let dollar = 26;

let dollarList = '';

for (let i = 10; i <= 100; i += 10) {
	dollarList += i * dollar + ', ';
}

console.log(dollarList);
