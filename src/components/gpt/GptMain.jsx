import React from "react";
// import GptSearchBar from "./GptSearchBar";
import GptSearchBar from "./GptSearchBar";
import GptBody from "./GptBody";
import { NETFLIX_BANNER } from "../../utils/constant";

const GptMain = () => {
  return (
    <div>
      <img
        src={NETFLIX_BANNER}
        alt="Background Image"
        className="w-12/12 absolute h-screen -z-10"
      />{" "}
      <div className="mt-20">
        <GptSearchBar />
        <GptBody />
      </div>
    </div>
  );
};

export default GptMain;
