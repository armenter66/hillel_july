// let peopleUrl = 'https://swapi.dev/api/people/';
// let planetsUrl = 'https://swapi.dev/api/planets/';
// let vehiclesUrl = 'https://swapi.dev/api/vehicles/';

const dataArray = {
	people: {
		url: 'https://swapi.dev/api/people/',
		parent: document.querySelector('.peopleBlock ul'),
		btnDownload: document.querySelector('.peopleBlock .download'),
		btnMore: document.querySelector('.peopleBlock .loadMore'),
	},
	planets: {
		url: 'https://swapi.dev/api/planets/',
		parent: document.querySelector('.planetBlock ul'),
		btnDownload: document.querySelector('.planetBlock .download'),
		btnMore: document.querySelector('.planetBlock .loadMore'),
	},
	vehicles: {
		url: 'https://swapi.dev/api/vehicles/',
		parent: document.querySelector('.vehicleBlock ul'),
		btnDownload: document.querySelector('.vehicleBlock .download'),
		btnMore: document.querySelector('.vehicleBlock .loadMore'),
	},
};

function loadData(key) {
	const res = dataArray[key];
	fetch(res.url)
		.then((resData) => resData.json())
		.then((result) => {
			showItems(result.results, res.parent);
			res.url = result.next;

			if (result.next) {
				res.btnMore.classList.remove('hidden');
			} else {
				res.btnMore.classList.add('hidden');
			}
		});
}

function showItems(items, parent) {
	items.forEach((item) => {
		const li = document.createElement('li');
		li.textContent = item.name;
		parent.appendChild(li);
		li.addEventListener('click', () => showDetails(item));
	});
}

function showDetails(item) {
	const modal = document.createElement('div');
	modal.className = 'modal';
	let detailsInfo = '';
	for (const key in item) {
		detailsInfo += `<p><b>${key}</b>: ${item[key]}</p>`;
	}
	modal.innerHTML = `
		<div class="modal-content">
		<span class="close">&times;</span>
		<h3>${item.name}</h3>
		${detailsInfo}
  	</div>`;
	document.body.appendChild(modal);
	modal.querySelector('.close').addEventListener('click', () => modal.remove());
}

Object.keys(dataArray).forEach((key) => {
	const btnDownload = dataArray[key].btnDownload;
	const btnMore = dataArray[key].btnMore;

	btnDownload.addEventListener('click', () => loadData(key));
	btnMore.addEventListener('click', () => loadData(key));
});
