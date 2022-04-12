import { createStore } from "redux";
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer);

export default store;