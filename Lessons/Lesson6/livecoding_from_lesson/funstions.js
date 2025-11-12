const DISCOUNT = 5;
const DISCOUNT_STARTS_FROM = 10000;

function showProducts() {
	for (let i = 0; i < products.length; i++) {
		console.log(`${i + 1}: ${products[i].name} $${products[i].price}`);
	}
}

function getProductNumber() {
	let productNumber;
	do {
		productNumber = parseInt(prompt('Enter the number of product you wanna buy'));
	} while (
		isNaN(productNumber) ||
		productNumber <= 0 ||
		productNumber >= products.length
	);

	return productNumber;
}

function getProductAmount() {
	let productAmount;
	do {
		productAmount = parseInt(prompt('Enter the amount of products to buy'));
	} while (isNaN(productAmount) || productAmount < 1 || productAmount > 10);

	return productAmount;
}

function calculatePrice(product, amount) {
	let price = product.price * amount;

	if (price > DISCOUNT_STARTS_FROM) {
		price *= (100 - DISCOUNT) / 100;
	}
}

function showOrderDetails(product, amount, price) {
	console.log(`
    Congrats! You've just bought ${product.name} x ${amount}. Final price is $${price}.
    `);
}
