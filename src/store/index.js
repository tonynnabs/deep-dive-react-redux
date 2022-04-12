import { createStore } from "redux";
const counterReducer = (state = { counter: 0, isVisible: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isVisible: state.isVisible,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      isVisible: state.isVisible,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isVisible: state.isVisible,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      isVisible: !state.isVisible,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
