import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            // state.items = state.items.filter(item => item.id!== action.payload);
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;