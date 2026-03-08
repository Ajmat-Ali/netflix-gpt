import React, { useEffect } from "react";

import { API_OPTIONS } from "../utils/constant";
import { addPopularMovie } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movie.popularMovies);

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
    !popularMovie && fetchPopularMovies();
  }, []);
};

export default useFetchPopularMovies;
