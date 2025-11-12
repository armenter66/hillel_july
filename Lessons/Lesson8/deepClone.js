const company1 = {
  id: 1,
  name: 'Main Boss',
  employees: [
    {
      id: 2,
      name: 'Director',
      employees: [
        {
          id: 4,
          name: 'Team Lead',
          employees: [
            { id: 5, name: 'Senior Developer 1' },
            { id: 6, name: 'Developer 2' },
          ],
        },
      ]
    },
    {
      id: 3,
      name: 'Fin Director',
      employees: [
        { id: 7, name: 'Accountant 1' },
        { id: 8, name: 'Accountant 2' },
      ]
    },
  ],
}

const company2 = deepClone(company1);

company2.name = 'Maks';
company2.employees[1].name = 'qwertyuio';
company2.employees[1].employees[0].employees = [{id:123, name: '456789'}];

console.log(company1)
console.log(company2)


function deepClone(obj) {
  let result = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj); // e.g. ['id', 'name', 'employees'] 

  for(let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') {
      result[keys[i]] = deepClone(obj[keys[i]]);
    } else {
      result[keys[i]] = obj[keys[i]];
    }
  }

  return result;
}