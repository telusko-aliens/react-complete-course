export function reducer(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return state;
}
