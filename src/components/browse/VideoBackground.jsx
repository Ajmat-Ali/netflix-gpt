import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import useGetTrailer from "../../hooks/useGetTrailer";

const VideoBackground = ({ id }) => {
  const movieTrailer = useSelector((store) => store.movie.trailer);

  useGetTrailer(id);

  if (!movieTrailer) return;

  return (
    <div className="aspect-video- w-screen h-screen overflow-hidden border border-5 ">
      <iframe
        className="w-screen h-full  scale-[1.5]  max-sm:scale[1]"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&loop=1&playlist=${movieTrailer?.key}&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
