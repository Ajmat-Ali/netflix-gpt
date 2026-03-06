import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import languageSlice from "./languageSlice";

const appStore = configureStore({
  reducer: {
    auth: authSlice,
    movie: movieSlice,
    gpt: gptSlice,
    language: languageSlice,
  },
});

export default appStore;
