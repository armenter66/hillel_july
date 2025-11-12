import { SAVE_TODO, GET_TODOS } from "./actions";

const initialState = {
  data: []
};

export const getAllTodos = () => {
  return dispatch => fetch('./db.json')
    .then(res => res.json())
    .then(result => dispatch(setAllTodos(result)));
}

const setAllTodos = data => ({ type: GET_TODOS, payload: data });

export const todosReducer = (state = initialState, action) => {
  let newStore;
  switch (action.type) {
    case SAVE_TODO:
      newStore = {
        data: [...state.data, action.payload],
      }
      return newStore;
    case GET_TODOS: 
      newStore = { data: action.payload };
      return newStore;
  }
  return state;
}