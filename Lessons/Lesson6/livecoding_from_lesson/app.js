showProducts();

let productNumber = getProductNumber();

let selectedProduct = products[productNumber - 1];

let productAmount = getProductAmount();

let finalPrice = calculatePrice(selectedProduct, productAmount);

showOrderDetails(selectedProduct, productAmount, finalPrice);
