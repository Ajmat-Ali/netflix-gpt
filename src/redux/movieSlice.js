import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "nowMovie",
  initialState: {
    nowPlaying: null,
    trailer: null,
  },
  reducers: {
    addNowPlay: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlay, addTrailer } = movieSlice.actions;

export default movieSlice.reducer;
