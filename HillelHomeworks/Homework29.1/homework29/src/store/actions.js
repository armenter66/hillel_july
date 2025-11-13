export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_BY = "ADD_BY";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const addBy = (payload) => ({
  type: ADD_BY,
  payload,
});