import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
    // devTools: process.env.NODE_ENV === 'development', // Enable Redux DevTools in development mode
});

export default appStore;