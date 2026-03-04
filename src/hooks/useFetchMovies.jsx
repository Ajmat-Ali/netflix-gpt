import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { NOW_PLAYING_MOVIES_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlay } from "../redux/movieSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async (url) => {
    try {
      const res = await fetch(url, API_OPTIONS);
      const json = await res.json();
      dispatch(addNowPlay(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    nowPlayingMovies(NOW_PLAYING_MOVIES_URL);
  }, []);
};

export default useFetchMovies;
