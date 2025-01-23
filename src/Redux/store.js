import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

const stores = configureStore({
  reducer: {
    userSlice,
    cartSlice,
  },
});
export default stores;
