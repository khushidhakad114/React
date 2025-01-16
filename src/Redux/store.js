import { configureStore } from "@reduxjs/toolkit";

const storeRedux = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default storeRedux;
