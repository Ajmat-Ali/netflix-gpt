import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../redux/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useFetchTopRated = () => {
  const dispatch = useDispatch();

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
    fetchTopRatedMovies();
  }, []);
};

export default useFetchTopRated;
