export const ADD_TODO = 'ADD_TODO';

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: { id: Date.now(), text, done: false },
});

export const saveToLocalStorage = () => (dispatch, getState) => {
	const state = getState();
	localStorage.setItem('todos', JSON.stringify(state.list));
};

export const addTodoAndSave = (text) => (dispatch) => {
	dispatch(addTodo(text));
	dispatch(saveToLocalStorage());
};

export const loadTodos = () => (dispatch) => {
	const data = localStorage.getItem('todos');
	if (data) {
		dispatch({
			type: 'SET_TODOS',
			payload: JSON.parse(data),
		});
	}
};
