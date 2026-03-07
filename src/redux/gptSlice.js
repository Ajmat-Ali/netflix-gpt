import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearchValue: false,
    searchedMovie: [],
    toggleLoadingError: {
      loading: true,
      error: false,
    },
  },
  reducers: {
    toggleSearch: (state, action) => {
      state.toggleSearchValue = !state.toggleSearchValue;
    },
    addSearcheMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
    toggleLoadingError: (state, action) => {
      const { loading, error } = action.payload;
      state.toggleLoadingError.loading = loading;
      state.toggleLoadingError.error = error;
    },
  },
});

export const { toggleSearch, addSearcheMovie, toggleLoadingError } =
  gptSlice.actions;
export default gptSlice.reducer;
