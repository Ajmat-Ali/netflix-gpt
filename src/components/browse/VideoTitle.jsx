import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlaying);

  return (
    <div className=" w-1/2 m-10 absolute z-11 text-white p-4 mt-[10%] bg-linear-to-t from-black/20 shadow-2xs shadow-black/50 rounded-xl max-md:w-8/12 max-md:mt-[20%] max-sm:mt-[40%] max-sm:m-0  max-xs:mt-[45%] max-xxs:mt-[60%]">
      <h1 className="text-5xl font-bold max-md:text-4xl max-sm:text-2xl max-xxs:text-xl">
        {title}
      </h1>
      <p className="mt-4 max-md:text-sm max-sm:hidden">{overview}</p>
      <div className="flex flex-row gap-x-5 m-5 max-sm:p-0 max-sm:mt-10 max-sm:m-0 max-xs:flex-col max-xs:mt-3 max-xs:gap-y-5 max-xxs:gap-y-3 ">
        <button className="text-black font-bold bg-white hover:opacity-50 p-4 px-12  rounded-lg cursor-pointer | max-md:text-sm max-md:px-8 max-md:py-2 max-sm:w-1/2 max-xs:w-7/12">
          Play
        </button>
        <button className="text-white bg-gray-500 p-4 px-12 rounded-lg cursor-pointer  hover:opacity-50 | max-md:text-sm max-md:px-8 max-md:py-2 max-sm:px-2 max-sm:w-1/2 max-xs:w-6/12">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
