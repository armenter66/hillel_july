const serverBaseUrl = 'http://localhost:3000';
const api = '/api/todos';

const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo-form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const priorityInput = document.querySelector('#priority');

async function loadTasks() {
	const res = await fetch(api);
	const tasks = await res.json();

	todoList.innerHTML = '';
	tasks.forEach((task) => renderTodo(task));
}

function renderTodo(task) {
	const li = document.createElement('li');

	li.innerHTML = `
    <strong>${task.title}</strong> — ${task.description} 
    <em>[${task.priority}]</em>
    <span>(${task.status})</span>
    <button data-id="${task.id}" class="delete-btn">Delete</button>
    <button data-id="${task.id}" class="done-btn">Done</button>
    `;

	if (task.status === 'done') {
		li.classList.add('done');
		li.querySelector('.delete-btn').disabled = true;
		li.querySelector('.done-btn').disabled = true;
	}
	todoList.appendChild(li);
}

form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const newList = {
		title: form.title.value.trim(),
		description: form.description.value.trim(),
		priority: form.priority.value,
		status: 'open',
	};

	const res = await fetch(api, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newList),
	});

	const createdEl = await res.json();
	renderTodo(createdEl);
	form.reset();
});

todoList.addEventListener('click', async (e) => {
	const id = e.target.dataset.id;
	if (!id) return;

	if (e.target.classList.contains('delete-btn')) {
		await fetch(`${api}/${id}`, { method: 'DELETE' });
		e.target.closest('li').remove();
		return;
	}

	if (e.target.classList.contains('done-btn')) {
		await fetch(`${api}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ status: 'done' }),
		});

		const li = e.target.closest('li');
		li.classList.add('done');

		e.target.disabled = true;
		li.querySelector('.delete-btn').disabled = true;
	}
});

loadTasks();
