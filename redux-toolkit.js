import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");
const login = createAction("LOGIN");

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, _action) => {
        state.status = true;
        return state;
    })
})

const cartReducer = createReducer([{id:1, qty: 100}], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    });
})

const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
    }
})
console.log("oncreate store: ", store.getState());

store.subscribe(() => {
    console.log("onchanges store: ", store.getState());
})

store.dispatch(addToCart({ id: 2, qty: 10 }))

store.dispatch(login());