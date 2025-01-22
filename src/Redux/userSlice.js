import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    loginFromRedux: (state, action) => {
      state.user = action.payload;
    },
    loginOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginFromRedux, loginOut } = userSlice.actions;
export default userSlice.reducer;
