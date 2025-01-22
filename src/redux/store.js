import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./createSlice";
import cartSlice from "./cartSlice";

const stores = configureStore({
  reducer: {
    userSlice,
    cartSlice: cartSlice,
  },
});

export default stores;
