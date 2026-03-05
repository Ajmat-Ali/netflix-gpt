import React from "react";
import { POSTER_BASE_PATH } from "../../utils/constant";

const MoveiCart = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <div className="w-45 cursor-pointer">
      <img
        className="w-full- h-full-"
        src={POSTER_BASE_PATH + poster_path}
        alt={movie.title}
      />
    </div>
  );
};

export default MoveiCart;
