import React, { useRef } from "react";
import lang from "../../utils/language";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const currentLanguage = useSelector(
    (store) => store.language.currentLanguage,
  );
  const searchRef = useRef(null);

  const handleSearchClick = async () => {
    try {
      console.log(searchRef.current.value);
      const gptQuery =
        "Act as a movie recommendation system and suggest few movies for the query" +
        searchRef.current.value +
        ". Only gives me name of 5 movies, comma seperated like the example results given ahead. Example Results:- Hera feri, Don, Khatha Mitha, Sholay, Koi Mil Gya";
      // const completion = await client.chat.completions.create({
      //   model: "gpt-5.2",
      //   messages: [
      //     // { role: "developer", content: "Talk like a pirate." },
      //     { role: "user", content: gptQuery },
      //   ],
      // });
      // console.log(completion);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl w-1/2 mx-auto shadow-lg">
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <input
          ref={searchRef}
          type="text"
          placeholder={lang[currentLanguage].searchPlaceholder}
          className="border border-gray-300 px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          onClick={handleSearchClick}
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
        >
          {lang[currentLanguage].searchButtonValue}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
