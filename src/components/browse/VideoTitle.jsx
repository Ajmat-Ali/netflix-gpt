import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlaying);

  return (
    <div className=" w-1/2 m-10 mt-20">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="mt-4">{overview}</p>
      <div className="flex gap-x-5 m-5">
        <button className="text-white bg-gray-500 p-4 px-12 rounded-lg">
          Play
        </button>
        <button className="text-white bg-gray-500 p-4 px-12 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
