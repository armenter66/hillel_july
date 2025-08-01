// Create an array whose length and elements are specified by the user. After that, sort the array in ascending order. Next, remove elements from the 2nd to 4th element from the array. As the array changes, display its contents on the page.

function sortArray(a, b) {
	return a - b;
}

let arrFromUser = [];
let arrLength;

do {
	arrLength = parseInt(prompt('Enter the length of array'));
} while (isNaN(arrLength) || arrLength <= 0);

for (let i = 0; i < arrLength; i++) {
	let value = parseInt(prompt('Enter the value of elements'));
	arrFromUser.push(value);
}

document.write(`Original array: ${arrFromUser} <br>`);

arrFromUser.sort(sortArray);
document.write(`Sorted array: ${arrFromUser} <br> `);

arrFromUser.splice(1, 3);
document.write(`Spliced array: ${arrFromUser} <br>`);

document.write('Final array: ' + arrFromUser.join());
