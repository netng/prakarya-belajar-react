import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },

        checkout(state, action) {
            state.push(action.payload);
        }
    }
})

const loginSlice = createSlice({
    name: "login",
    initialState: {status: false},
    reducers: {
        createSession(state, action) {
            state.status = true;
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        login: loginSlice.reducer,
    }
})

console.log("oncreate store: ", store.getState());

store.subscribe(() => {
    console.log("onchanges store: ", store.getState());
})

store.dispatch(cartSlice.actions.addToCart({id: 1, qty: 100}));
store.dispatch(cartSlice.actions.checkout({complete: true}));
store.dispatch(loginSlice.actions.createSession());