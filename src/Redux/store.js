import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

const reduxStore = configureStore({
  reducer: {
    userSlice,
    cartSlice,
  },
});
export default reduxStore;
