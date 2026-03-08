import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlaying);

  if (!nowPlayingMovies) return;

  const { title, overview, id } = nowPlayingMovies[0];

  return (
    <div className="max-sm:-mt-30">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};
