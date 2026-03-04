import Header from "../Header";
import useFetchMovies from "../../hooks/useFetchMovies";
import { useSelector } from "react-redux";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const x = useSelector((store) => store.movie.nowPlaying);
  useFetchMovies();

  return (
    <div className="w-full">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* Browse Component */}
    </div>
  );
};

export default Browse;
