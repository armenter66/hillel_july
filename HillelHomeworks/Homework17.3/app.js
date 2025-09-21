class BankAccount {
	constructor(balance) {
		this.balance = balance;
	}

	deposit(money) {
		return (this.balance += money);
	}

	withdraw(money) {
		return (this.balance -= money);
	}

	getBalance() {
		return this.balance;
	}
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
