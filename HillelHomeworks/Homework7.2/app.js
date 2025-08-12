function resultOfProduct(a) {
	return (b) => {
		return a * b;
	};
}

console.log(resultOfProduct(7)(2));
