import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    loginOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginAction, loginOut } = userSlice.actions;
export default userSlice.reducer;
