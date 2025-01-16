import { configureStore } from "@reduxjs/toolkit";
import user from "./createSlice";
export const store = configureStore({
  reducer: {
    user,
  },
});
