function writeNumbers() {
	let lastNumber = 0;
	let numbersArray = [];

	for (let i = 0; i < 3; i++) {
		let numb = parseInt(prompt('Write number  bigger then 100'));
		if (isNaN(numb) || numb <= 100) {
			alert('Only numbers bigger then 100!!!');
			i--;
		} else {
			numbersArray.push(numb);
			lastNumber = numbersArray[numbersArray.length - 1];
		}
	}

	console.log(lastNumber);
}

writeNumbers();
