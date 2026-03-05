import React from "react";
import MoveiCart from "./MoveiCart";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  const m = movies[0];
  return (
    <div className="px-4 text-white ">
      <h1 className="text-2xl m-3">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-3 ">
          {movies.map((movie) => {
            return <MoveiCart key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
