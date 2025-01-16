import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: "guest",
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});
export default createSlice.reducer;
export const { loginAction, logout } = user.actions;
