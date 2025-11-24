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

app.delete('/projects/:id', (req, res) => {
	const { id } = req.params;

	const index = projectsMock.findIndex((p) => p.id === id);

	if (index === -1) {
		return res.status(404).json({ error: 'Project not found' });
	}

	const deleted = projectsMock[index];

	projectsMock.splice(index, 1);

	return res.json(deleted);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
