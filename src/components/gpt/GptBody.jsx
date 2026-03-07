import { useSelector } from "react-redux";
import MovieList from "../browse/MovieList";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";

const GptBody = () => {
  const searchedMovies = useSelector((store) => store.gpt.searchedMovie);
  const toggleLoadingError = useSelector(
    (store) => store.gpt.toggleLoadingError,
  );
  const { loading, error } = toggleLoadingError;
  // if (loading) return <Loading />;
  // if (error) return <ErrorComponent />;
  return (
    <div className=" bg-gray-900 ">
      <MovieList key="movie.id" movies={searchedMovies} />
    </div>
  );
};

export default GptBody;
