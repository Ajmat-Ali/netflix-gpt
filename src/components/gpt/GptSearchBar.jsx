import { useEffect, useRef, useState } from "react";
import lang from "../../utils/language";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../../utils/debounce";
import useDebounce from "../../hooks/useDebounce";
import { API_OPTIONS } from "../../utils/constant";
import { addSearcheMovie } from "../../redux/gptSlice";
import { toggleLoadingError } from "../../redux/gptSlice";

const GptSearchBar = () => {
  const currentLanguage = useSelector(
    (store) => store.language.currentLanguage,
  );

  // const toggleLoadingError = useSelector(
  //   (store) => store.gpt.toggleLoadingError,
  // );
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState("");
  const searchedVal = useDebounce(searchVal, 1000);

  const searchMovie = async (args) => {
    dispatch(
      toggleLoadingError({
        loading: true,
        error: false,
      }),
    );
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${args}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      );
      const json = await res.json();
      dispatch(addSearcheMovie(json.results));
      dispatch(
        toggleLoadingError({
          loading: false,
          error: false,
        }),
      );
    } catch (error) {
      dispatch(
        toggleLoadingError({
          loading: false,
          error: true,
        }),
      );
    }
  };

  useEffect(() => {
    if (!searchedVal) return;
    searchMovie(searchedVal);
  }, [searchedVal]);

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchClick = async () => {};

  return (
    <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl w-1/2 mx-auto shadow-lg">
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <input
          onChange={handleSearchChange}
          value={searchVal}
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
