const initialState = 0;
export const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    state = state + action.data;
  } else if (action.type === "DECREMENT") {
    state = state - action.data;
  } else if (action.type === "RESET") {
    state = state * action.data;
  }
  return state;
};
