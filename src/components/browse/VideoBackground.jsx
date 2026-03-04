import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addTrailer } from "../../redux/movieSlice";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movie.trailer);

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
  if (!movieTrailer) return;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?si=t8_dkTTkqnZNaaLL`}
        title="YouTube video player"
        // frameborder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
