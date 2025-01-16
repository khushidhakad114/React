import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";

const reduxStore = configureStore({
  reducer: {
    user,
  },
});

export default reduxStore;
