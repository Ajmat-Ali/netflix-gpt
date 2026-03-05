import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../redux/movieSlice";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS,
      );
      const json = await res.json();
      dispatch(addNowPlayingMovie(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useFetchNowPlayingMovies;
