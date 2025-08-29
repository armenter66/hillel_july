// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

function createTable() {
	const colSize = 10;
	const tableContainer = document.querySelector('.table-container');
	let tableBox = `<table><thead><tr><th></th>`;

	for (let i = 1; i <= colSize; i++) {
		tableBox += `<th> ${i} </th>`;
	}

	tableBox += '</tr></thead><tbody>';

	for (let j = 1; j <= colSize; j++) {
		tableBox += `<tr><th> ${j} </th>`;
		for (let k = 1; k <= colSize; k++) {
			tableBox += `<td> ${k * j} </td>`;
		}
		tableBox += '</tr>';
	}

	tableBox += '</tbody></table>';

	tableContainer.innerHTML += tableBox;
}

createTable();
