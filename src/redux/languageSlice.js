import { createSlice } from "@reduxjs/toolkit";
const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLanguage: "en",
  },
  reducers: {
    toggleLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
