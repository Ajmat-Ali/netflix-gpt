import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="bg-black ">
      <div className="relative -mt-52 z-20 pl-10 max-sm:pl-5">
        <MovieList movies={movies.nowPlaying} title={"Now Playing"} />
        <MovieList movies={movies.popularMovies} title={"Popular"} />
        <MovieList movies={movies.topRatedMovies} title={"Top Rated"} />
        <MovieList movies={movies.upcomingMovies} title={"Upcoming"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
