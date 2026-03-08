import { useSelector } from "react-redux";
import MovieList from "../browse/MovieList";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";
import MovieNotFound from "../MovieNotFound";

const GptBody = () => {
  const searchedMovies = useSelector((store) => store.gpt.searchedMovie);
  const toggleLoadingError = useSelector(
    (store) => store.gpt.toggleLoadingError,
  );
  const { loading, error } = toggleLoadingError;

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  if (searchedMovies === null)
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
        <h1 className="text-3xl font-semibold text-white mb-3">
          Search Movies
        </h1>

        <p className="text-gray-400 max-w-md">
          Start typing a movie name in the search bar to discover movies.
        </p>
      </div>
    );

  if (searchedMovies.length === 0) return <MovieNotFound />;

  return (
    <div className=" bg-gray-700/70 mt-10 p-10 max-sm:p-5">
      <MovieList key="movie.id" movies={searchedMovies} />
    </div>
  );
};

export default GptBody;
