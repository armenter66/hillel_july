const companyHierachy = {
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

function showHierarchy(hierarchy) {
  console.log(hierarchy.name);
  if (!hierarchy.employees) {
    return;
  }

  for (let i = 0; i < hierarchy.employees.length; i++) {
    showHierarchy(hierarchy.employees[i]);
  }
}

showHierarchy(companyHierachy);
