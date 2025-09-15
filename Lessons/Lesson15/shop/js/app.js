const showCategories = () => {
  const parent = document.querySelector('.categories');
  if (!parent) {
    return;
  }

  const categoriesList = document.createElement('ul');
  categoriesList.addEventListener('click', event => {
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

  Object.values(categories).forEach(category => {
    const element = document.createElement('li');
    element.textContent = category.name;
    element.setAttribute('data-category', category.id);

    // element.addEventListener('click', () => {
    //   console.log(category);
    // });

    categoriesList.appendChild(element);
  });

  parent.appendChild(categoriesList);
}

// const getCategoryById = id => categories.find(category => category.id == id);

const showProductsByCategory = category => {
  // const { products } = category; те саме, що і нижче
  const products = category.products;
  const parent = document.querySelector('.products');
  if (!parent) {
    return;
  }

  parent.innerHTML = '';

  const productsList = document.createElement('ul');

  productsList.addEventListener('click', event => {
    if (event.target && event.target.tagName === 'LI') {
      console.log(event.target);
      // const categoryId = category.id
      const categoryId = event.target.getAttribute('data-category');
      const productId = event.target.getAttribute('data-product');



      // TODO: (at home)
      // Add content to the third column
    }
  });


  products.forEach(product => {
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
}


showCategories();


const createShopPage = () => {
  document.querySelector('.wrapper').innerHTML = `
  <div class="categories"></div>
    <div class="products"></div>
    <div class="info"></div>
  `;
}


document.querySelector('.my-orders').addEventListener('click', () => {
  const wrapper = document.querySelector('.wrapper');
  wrapper.style.display="block";
  wrapper.innerHTML = '';
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  console.log(orders);
  if (orders.length === 0) {
    wrapper.innerHTML = 'You have no orders yet';
  } else {
    for (let order of orders) {
      const element = document.createElement('div');
      element.textContent = order.product;
      element.addEventListener('click', () => {
        const elementIndexToRemove = orders.findIndex(myOrder => myOrder.id === order.id);
        orders.splice(elementIndexToRemove, 1);
        console.log(orders)
        localStorage.setItem('orders', JSON.stringify(orders));

        element.remove();
      })

      wrapper.appendChild(element);

    }
  }
  /*
    [{
      id: 1,
      date: '11-Sept-2025',
      product: 'Apple iPhone | $100000',
      amount: 5,
      ....
    },{},{}]
  */




})