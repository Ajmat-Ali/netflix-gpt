import React from "react";
import { POSTER_BASE_PATH } from "../../utils/constant";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";

const MoveiCart = ({ movie }) => {
  const { poster_path } = movie;
  if (!poster_path) return;
  return (
    <div className="w-45 cursor-pointer">
      <img
        className="w-full- h-full"
        src={POSTER_BASE_PATH + poster_path}
        alt={movie.title}
      />
    </div>
  );
};

export default MoveiCart;
