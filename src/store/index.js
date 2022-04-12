import { createSlice, configureStore} from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isVisible: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.isVisible = !state.isVisible;
        }
    }
});

const inititalAuthState = {isAuthenticated: false};
const authSlice = createSlice({
    name: 'auth',
    initialState: inititalAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
