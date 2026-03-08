import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useFetchTopRated = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovies);

  const fetchTopRatedMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS,
      );
      const json = await res.json();
      dispatch(addTopRatedMovie(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !topRatedMovie && fetchTopRatedMovies();
  }, []);
};

export default useFetchTopRated;
