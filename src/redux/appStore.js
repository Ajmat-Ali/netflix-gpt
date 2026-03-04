import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";

const appStore = configureStore({
  reducer: {
    auth: authSlice,
    movie: movieSlice,
  },
});

export default appStore;
