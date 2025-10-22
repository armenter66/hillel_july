import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');
app.use(express.static(clientPath));

app.get('/', (req, res) => {
	res.sendFile(path.join(clientPath, 'index.html'));
});

const todos = [];
const port = 3000;
let idTask = 1;

app.get('/api/todos', (request, response) => {
	response.json(todos);
});

app.post('/api/todos', (request, response) => {
	const { title, description, priority, status } = request.body;

	if (!title) {
		return response.status(400).json({ error: 'Title is required' });
	}

	const newTask = {
		id: idTask++,
		title,
		description: description || '',
		priority: priority || 'medium',
		status: status || 'open',
	};

	todos.push(newTask);
	response.send(newTask);
});

app.put('/api/todos/:id', (request, response) => {
	const { id } = request.params;
	const { title, description, priority, status } = request.body;
	const index = todos.findIndex((title) => title.id == id);
	if (index === -1) {
		return response.sendStatus(400);
	}

	const updatedTodo = {
		id: index,
		title: title,
		description: description || '',
		priority: priority,
		status: status,
	};

	todos[index] = updatedTodo;
	response.json(updatedTodo);
});

app.delete('/api/todos/:id', (request, response) => {
	const { id } = request.params;
	const index = todos.findIndex((title) => title.id == id);
	if (index === -1) {
		return response.sendStatus(400);
	}

	todos.splice(index, 1);
	response.send('Removed successfully');
});

app.listen(port, () => {
	console.log(`We live on ${port}`);
});
