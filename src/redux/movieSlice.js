import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "nowMovie",
  initialState: {
    nowPlaying: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailer,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
