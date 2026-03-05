import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovie } from "../redux/movieSlice";

const useFetchUpcoming = () => {
  const dispatch = useDispatch();

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
    fetchUpcomingMovies();
  }, []);
};

export default useFetchUpcoming;
