import { createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState = { counter: 0, isVisible: true };
createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.amount;
        },
        toggle(state){
            state.isVisible = !state.isVisible;
        }
    }
})
const counterReducer = (state = initialState, action) => {
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
