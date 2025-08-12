function sum() {
	let total = 0;

	return function (num) {
		total += num;
		return total;
	};
}

let result = sum();

console.log(result(4)); // 4
console.log(result(6)); // 10
console.log(result(10)); // 20
console.log(result(7)); // 27
