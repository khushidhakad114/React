import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "guest",

  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    loginOut: (state, action) => {
      return null;
    },
  },
});

export default userSlice.reducer;
export const { login, loginOut } = userSlice.actions;
