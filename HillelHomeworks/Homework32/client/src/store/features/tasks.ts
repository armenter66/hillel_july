import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface ITask {
	id: string;
	title: string;
	description: string;
	priority: string;
	status?: string;
	assignee?: string;
	projectId: string;
}

interface ITasksState {
	data: ITask[];
}

const initialState: ITasksState = {
	data: [],
};

export const getTasksAsync = createAsyncThunk<ITask[], string | undefined>(
	'tasks/getList',
	async (projectId = '') => {
		const result = await axios.get<ITask[]>(`http://localhost:3000/tasks/${projectId}`);
		return result.data;
	}
);

export const createTaskAsync = createAsyncThunk<ITask, Omit<ITask, 'id'>>(
	'tasks/create',
	async (taskData) => {
		const response = await axios.post<ITask>('http://localhost:3000/tasks', taskData);
		return response.data;
	}
);

export const updateTaskAsync = createAsyncThunk<ITask,{ id: string; updates: Partial<ITask> }>(
	'tasks/update',
	async ({ id, updates }) => {
		const response = await axios.put(
			`http://localhost:3000/tasks/${id}`,
			updates
		);
		return response.data;
	}
);

export const deleteTaskAsync = createAsyncThunk<string, string>('tasks/delete', async (id) => {
	await axios.delete(`http://localhost:3000/tasks/${id}`);
	return id;
});

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTasksAsync.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(createTaskAsync.fulfilled, (state, action) => {
				state.data.push(action.payload);
			})
			.addCase(updateTaskAsync.fulfilled, (state, action) => {
				const updated = action.payload;
				const index = state.data.findIndex((t) => t.id === updated.id);
				if (index !== -1) {
					state.data[index] = updated;
				}
			})
			.addCase(deleteTaskAsync.fulfilled, (state, action) => {
				const id = action.payload;
				state.data = state.data.filter((t) => t.id !== id);
			});
	},
});

export default tasksSlice.reducer;
