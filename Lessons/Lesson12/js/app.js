const showCategories = () => {
	const parent = document.querySelector('.categories');
	if (!parent) {
		return;
	}

	const categoriesList = document.createElement('ul');
	categoriesList.addEventListener('click', (event) => {
		if (event.target && event.target.tagName === 'LI') {
			const categoryId = event.target.getAttribute('data-category');
			// const category = getCategoryById(categoryId);
			const category = categories[categoryId];
			if (!category) {
				return;
			}
			// console.log(category);
			showProductsByCategory(category);
		}
	});

	Object.values(categories).forEach((category) => {
		const element = document.createElement('li');
		element.textContent = category.name;
		element.setAttribute('data-category', category.id);

		// element.addEventListener('click', () => {
		//   console.log(category);
		// });

		categoriesList.appendChild(element);
	});

	parent.appendChild(categoriesList);
};

const showProductsByCategory = (category) => {
	// const { products } = category; те саме, що і нижче
	const products = category.products;
	const parent = document.querySelector('.products');
	if (!parent) {
		return;
	}

	parent.innerHTML = '';

	const productsList = document.createElement('ul');

	productsList.addEventListener('click', (event) => {
		if (event.target && event.target.tagName === 'LI') {
			console.log(event.target);
			// const categoryId = category.id
			const categoryId = event.target.getAttribute('data-category');
			const productId = event.target.getAttribute('data-product');
			// TODO: (at home)
			// Add content to the third column
			const category = categories[categoryId];
			if (!category) return;

			const product = category.products.find((e) => e.id == productId);
			if (!product) return;

			showProductInfo(product);
		}
	});

	products.forEach((product) => {
		const element = document.createElement('li');
		element.textContent = `${product.name} - $${product.price}`;
		element.setAttribute('data-product', product.id);
		element.setAttribute('data-category', category.id);
		// element.addEventListener('click', () => {
		//   console.log(product);
		// })
		productsList.appendChild(element);
	});

	parent.appendChild(productsList);
};

const showProductInfo = (product) => {
	const parent = document.querySelector('.info');
	if (!parent) return;

	parent.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span>Price: $${product.price}</span>
	<br>
	<button class="buyBtn"> Buy </button>
    `;

	document.querySelector('.buyBtn').addEventListener('click', () => {
		const formBlock = document.createElement('div');
		formBlock.innerHTML = `
		<form action="" class="form" name="mainForm">
			<br>
            <input type="text" name="fullName" placeholder="Enter fullname">
			<br>
            <h4>City</h4>
            <select name="city">
				<option value="">Choose city</option>
				<option value="Kyiv">Kyiv</option>
				<option value="Lviv">Lviv</option>
				<option value="Odesa">Odesa</option>
			</select>
			<br>
			<br>
			<input type="text" name="warehouse" placeholder="Nova post number">
			<br>

            <h4>Payment method</h4>
            <br>
			<label><input type="radio" name="payment" value="cod"> Накладений платіж</label>
			<label><input type="radio" name="payment" value="card"> Оплата на рахунок</label>
			<br>

			<br>
			<input type="number" name="quantity" placeholder="Quantity" min="1">
			<br>	
			<br>
			<textarea name="comment" placeholder="Your message"></textarea>
			<br>

            <br>
            <button type="button" class="formBtn"> Order </button>
        </form>
		`;
		parent.appendChild(formBlock);

		formChecking(product);
	});
};

const formChecking = (product) => {
	const orderBlock = document.querySelector('.order-details');
	document.querySelector('.formBtn').addEventListener('click', () => {
		const payments = {
			cod: 'Накладений платіж',
			card: 'Оплата на рахунок',
		};

		const form = document.forms.mainForm;

		const nameValue = form.fullName.value.trim();
		const warehouse = form.warehouse.value;
		const payment = form.payment.value;
		const quantity = form.quantity.value;
		const comment = form.comment.value;
		const cityIndex = form.city.selectedIndex;
		const cityName = form.city.options[cityIndex].textContent;

		const errors = [];

		if (!/^[A-Za-zА-Яа-яЇїІіЄєҐґ' -]{3,}$/.test(nameValue)) {
			errors.push(
				'Fullname should contain only letters and be at least 3 characters'
			);
		}

		if (!cityName) {
			errors.push('Choose city');
		}

		if (!/^\d+$/.test(warehouse)) {
			errors.push('Nova Post delivery should have only numbers');
		}

		if (!payment) {
			errors.push('Choose payment method');
		}

		if (!/^[1-9]\d{0,1}$/.test(quantity)) {
			errors.push('Quantity should be from 1 to 99');
		}

		if (errors.length > 0) {
			orderBlock.innerHTML = `
			<div style="color: red;">
				<h3>Errors:</h3>
				<ul>
				${errors.map((err) => `<li>${err}</li>`).join('')}
				</ul>
			</div>
			`;
		} else {
			orderBlock.innerHTML = `
			<h2>Your order</h2>
			<h3>${product.name}</h3>
			<p>${product.description}</p>
			<span>Price: $${product.price}</span>
			<br>

			Name: ${nameValue} <br> 
			Warehouse: ${warehouse} <br>
			Payment method: ${payments[payment]} <br> 
			Quantity: ${quantity} <br> 
			City: ${cityName} <br>
			Comment: ${comment}
		`;
		}
	});
};

showCategories();
