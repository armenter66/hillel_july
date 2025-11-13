import { INCREMENT, DECREMENT, ADD_BY } from "./actions";

const initialState = {
	value: 0,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT: 
			return {
				...state,
				value: state.value + 1 
			};
		case DECREMENT: 
			return {
				...state,
				value: state.value - 1
			}
		case ADD_BY: 
			return {
				...state,
				value: state.value + action.payload
			}
	}
	return state;
}	