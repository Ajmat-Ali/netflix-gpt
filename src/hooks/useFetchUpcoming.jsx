import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovie } from "../redux/movieSlice";

const useFetchUpcoming = () => {
  const dispatch = useDispatch();
  const upcominMovie = useSelector((store) => store.movie.upcomingMovies);

  const fetchUpcomingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS,
      );
      const json = await res.json();
      dispatch(addUpcomingMovie(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !upcominMovie && fetchUpcomingMovies();
  }, []);
};

export default useFetchUpcoming;
