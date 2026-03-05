import React, { useEffect } from "react";
import { addTrailer } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";

const useGetTrailer = (id) => {
  const dispatch = useDispatch();

  const fetchTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS,
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer",
      );
      const trailer = filteredData[0];

      dispatch(addTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, []);
  //   return <div>useGetTrailer</div>;
};

export default useGetTrailer;
