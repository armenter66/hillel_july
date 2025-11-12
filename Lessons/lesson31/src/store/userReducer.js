import { ADD_MONEY, GET_MONEY } from "./actions";

const initialState = {
  userName: 'Jack',
  money: 0,
}

export function userReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_MONEY:
      newState = {
        ...state,
        money: state.money - action.payload.amount
      };
      return newState;
    case ADD_MONEY:
      newState = {
        ...state,
        money: state.money + action.payload.amount
      };
      return newState;
  }
  return state;
}

