import express, { response } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { projectsMock } from './mockData/projects.js';
import { tasksData } from './mockData/tasks.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/projects', (request, response) => {
	return response.json(projectsMock);
});

app.post('/projects', (request, response) => {
	const data = request.body;
	const newProject = {
		id: uuidv4(),
		...data,
	};
	projectsMock.push(newProject);
	return response.send(newProject);
});

app.post('/signin', (req, res) => {
	const { login, password } = req.body;

	if (login === 'admin' && password === 'admin') {
		res.json({ login, role: 'user' });
	} else {
		res.status(401).json({ error: 'Invalid login or password' });
	}
});

app.get('/tasks', (request, response) => {
	return response.json(tasksData);
});

app.get('/tasks/:projectId', (request, response) => {
	const { projectId } = request.params;
	const filtered = tasksData.filter((t) => t.projectId === projectId);
	return response.json(filtered);
});

app.post('/tasks', (request, response) => {
	const data = request.body;

	const newTask = {
		id: uuidv4(),
		...data,
	};

	tasksData.push(newTask);

	return response.json(newTask);
});

app.put('/tasks/:id', (request, response) => {
	const { id } = request.params;
	const data = request.body;

	const index = tasksData.findIndex((t) => t.id === id);

	if (index === -1) {
		return response.status(404).json({ error: 'Task not found' });
	}

	tasksData[index] = { ...tasksData[index], ...data };

	return response.json(tasksData[index]);
});

app.delete('/projects/:id', (request, response) => {
	const { id } = request.params;

	const index = projectsMock.findIndex((p) => p.id === id);

	if (index === -1) {
		return response.status(404).json({ error: 'Project not found' });
	}

	const deleted = projectsMock[index];

	projectsMock.splice(index, 1);

	return response.json(deleted);
});

app.delete('/tasks/:id', (request, response) => {
	const { id } = request.params;

	const index = tasksData.findIndex((t) => t.id === id);

	if (index === -1) {
		return response.status(404).json({ error: 'Task not found' });
	}

	const deleted = tasksData[index];
	tasksData.splice(index, 1);

	return response.json(deleted);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
