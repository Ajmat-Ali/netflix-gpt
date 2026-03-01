import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
