import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSwapi = createAsyncThunk(
	'swapi/fetchSwapi',
	async (url) => {
		const response = await axios.get(url);
		return response.data;
	}
);

const swapiSlice = createSlice({
	name: 'swapi',
	initialState: {
		data: null,
		loading: false,
		error: null,
	},

	reducers: {
		clearSwapi(state) {
			state.data = null;
			state.error = null;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchSwapi.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSwapi.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchSwapi.rejected, (state) => {
				state.loading = false;
				state.error = 'Failed to load data.';
			});
	},
});

export const { clearSwapi } = swapiSlice.actions;
export default swapiSlice.reducer;
