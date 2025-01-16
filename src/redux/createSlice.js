import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: "guest",
  reducers: {
    loginAction: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return "guest";
    },
  },
});

export const { loginAction, logout } = user.actions;
export default createSlice.reducer;
