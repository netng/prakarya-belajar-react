import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const currentItemInCart = state.data.find((item) => item.id === action.payload.id);

            if (currentItemInCart) {
                currentItemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;