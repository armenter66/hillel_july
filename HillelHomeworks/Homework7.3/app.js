function writeNumbers() {
	let lastNumber;

	for (let i = 0; i < 10; i++) {
		let numb = parseInt(prompt('Write number bigger then 100'));
		if (isNaN(numb) || numb <= 100) {
			alert('Only numbers bigger then 100!!!');
		} else {
			lastNumber = numb;
			break;
		}
	}

	console.log(lastNumber);
}

writeNumbers();
