import { configureStore } from "@reduxjs/toolkit";
import user from "./createSlice";
const store = configureStore({
  reducer: {
    user,
  },
});
export default store;
