import React from "react";

const MovieNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
      <h1 className="text-3xl font-semibold text-red-500 mb-3">
        No Movies Found
      </h1>

      <p className="text-gray-400 max-w-md">
        We couldn't find any movies matching your search. Try another title.
      </p>
    </div>
  );
};

export default MovieNotFound;
