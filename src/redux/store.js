import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import cartSlice from "./cartSlice";

const reduxStore = configureStore({
  reducer: {
    user,
    cartSlice: cartSlice,
  },
});

export default reduxStore;
