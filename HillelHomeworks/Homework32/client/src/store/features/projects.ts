import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IProject {
	id: string;
	title: string;
	description: string;
	priority: string;
}

export interface IProjectState {
    data: IProject[];
    loaded: boolean;
}

const initialState: IProjectState = {
	data: [],
	loaded: false,
};

const PROJECTS_URL = 'http://localhost:3000/projects';

export const getProjectsAsync = createAsyncThunk<IProject[]>(
	'projects/getList',
	async () => {
		const result = await axios.get<IProject[]>(PROJECTS_URL);
		return result.data;
	}
);

export const saveProjectAsync = createAsyncThunk<IProject, Omit<IProject, 'id'>>(
	'projects/save',
	async (project) => {
		const result = await axios.post(PROJECTS_URL, project);
		return result.data;
	}
);

export const deleteProjectAsync = createAsyncThunk<string, string>(
	'projects/delete',
	async (id) => {
		await axios.delete(`${PROJECTS_URL}/${id}`);
		return id;
	}
);

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getProjectsAsync.fulfilled, (state, action) => {
			state.data = action.payload;
		});

		builder.addCase(saveProjectAsync.fulfilled, (state) => {
			state.loaded = true;
		});

		builder.addCase(deleteProjectAsync.fulfilled, (state, action) => {
			state.data = state.data.filter((p) => p.id !== action.payload);
		});
	},
});


export default projectsSlice.reducer;
