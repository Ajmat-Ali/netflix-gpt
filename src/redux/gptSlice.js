import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearchValue: false,
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.toggleSearchValue = !state.toggleSearchValue;
    },
  },
});

export const { toggleSearch } = gptSlice.actions;
export default gptSlice.reducer;
