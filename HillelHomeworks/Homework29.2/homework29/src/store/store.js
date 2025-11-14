import { applyMiddleware, createStore } from 'redux';
import { todoReducer } from './ToDoReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

export const store = createStore(
	todoReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
