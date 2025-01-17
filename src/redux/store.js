import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./createSlice";
const stores = configureStore({
  reducer: {
    userSlice,
  },
});
export default stores;
