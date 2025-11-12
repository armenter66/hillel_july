if (localStorage.getItem('formInfo')) {
  const initialData = JSON.parse(localStorage.getItem('formInfo'));
  console.log(initialData);

  // document.forms[0].fullname.value = initialData.fullname;
  // document.forms[0].login.value = initialData.login;
  // document.forms[0].date.value = initialData.date;

  for (let key in initialData) {
    document.forms[0][key].value = initialData[key];
  }
}



const formValidatorsConfig = {
  fullname: {
    regex: /^[A-Z][a-z]{3,10} [A-Z][a-z]{3,10}$/,
    required: true,
    error: {
      selector: '.fullname-error',
      message: 'Fullname is incorrect or empty',
    }
  },
  login: {
    regex: /^\w{5,10}$/i,
    required: true,
    error: {
      selector: '.login-error',
      message: 'Login is incorrect or empty',
    }
  },
  date: {
    regex: /^\d{2}.\d{2}.\d{4}$/,
    required: false,
    error: {
      selector: '.date-error',
      message: 'Date is incorrect or empty',
    }
  },
};

document.querySelector('.save-btn').addEventListener('click', () => {
  sessionStorage.setItem('data', 'hello')

  // 1. get data from form
  const formData = getDateFromForm();

  // 2. validate data | show error if needed

  const isValid = validateFormData(formData);

  // 3. save data...
  if (isValid) {
    
    localStorage.setItem('formInfo', JSON.stringify(formData));
    
    // save data....
  } else {
    
    localStorage.setItem('formInfo', 'error');
  }
});

function getDateFromForm() {
  const form = document.forms[0];

  const fullname = form.fullname.value;
  const login = form.login.value;
  const date = form.date.value;

  const data = {
    fullname,
    login,
    date,
  };

  return data;
}

/**
 * 
 * true if valid
 * false if invalid
 */
function validateFormData(data) {
  let errors = 0;
  for (let key in data) {
    const errorElement = document.querySelector(formValidatorsConfig[key].error.selector);
    if (
        (formValidatorsConfig[key].required && !data[key]) ||
        (data[key] && !data[key].match(formValidatorsConfig[key].regex))
      ) {
      errors++;
      // ....add error to html
      errorElement.textContent = formValidatorsConfig[key].error.message;
    } else {
      errorElement.textContent = '';
    }
  }

  return errors === 0;
}