import { useEffect, useRef, useState } from "react";
import lang from "../../utils/language";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../../utils/debounce";
import useDebounce from "../../hooks/useDebounce";
import { API_OPTIONS } from "../../utils/constant";
import { addSearcheMovie } from "../../redux/gptSlice";
import { toggleLoadingError } from "../../redux/gptSlice";

const GptSearchBar = () => {
  const searchRef = useRef(null);

  const currentLanguage = useSelector(
    (store) => store.language.currentLanguage,
  );

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
    if (!searchRef.current.value) {
      dispatch(addSearcheMovie(null));
    }
  };

  const handleSearchClick = async () => {};

  return (
    <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl w-1/2  mx-auto mt-10 shadow-lg max-md:w-8/12 max-sm:mt-50 max-sm:w-full max-sm:p-2">
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <input
          ref={searchRef}
          onChange={handleSearchChange}
          value={searchVal}
          type="text"
          placeholder={lang[currentLanguage].searchPlaceholder}
          className="border border-gray-300 px-4 py-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
        />

        <button
          onClick={handleSearchClick}
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition cursor-pointer max-sm:text-sm max-sm:px-4 max-sm:py-0"
        >
          {lang[currentLanguage].searchButtonValue}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
