import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constant";
import { addPopularMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS,
      );
      const json = await res.json();
      dispatch(addPopularMovie(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default useFetchPopularMovies;
