import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const reduxStore = configureStore({
  reducer: {
    userSlice,
  },
});
export default reduxStore;
