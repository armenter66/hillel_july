'use strict';

// Task 1
const ordersCount = orders.reduce((value, order) => {
	value[order.user] = (value[order.user] || 0) + 1;
	return value;
}, {});

console.log(ordersCount);

// Task 2

let sumOfOrders = new Map();

sumOfOrders = orders.reduce((value, order) => {
	const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
	const currentSum = value.get(order.user) || 0;

	value.set(order.user, orderTotal + currentSum);

	return value;
}, sumOfOrders);

console.log(sumOfOrders);

// Task 3

const uniqueItems = new Set();

for (const order of orders) {
	for (const item of order.items) {
		uniqueItems.add(item.name);
	}
}

console.log(uniqueItems);

// Task 4

// let maxUser = '';
// let maxAmount = 0;

// for (let [user, amount] of sumOfOrders) {
// 	if (amount > maxAmount) {
// 		maxAmount = amount;
// 		maxUser = user;
// 	}
// }

// console.log(`${maxUser} витратив більше за всіх: $${maxAmount}`);

const [maxUser, maxAmount] = [...sumOfOrders].reduce((max, [user, amount]) => {
	return amount > max[1] ? [user, amount] : max;
});

console.log(`${maxUser} витратив більше за всіх: $${maxAmount}`);


