import Header from "../Header";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopularMovies from "../../hooks/useFetchPopularMovies";
import useFetchNowPlayingMovies from "../../hooks/useFetchNowPlayingMovies";
import useFetchTopRated from "../../hooks/useFetchTopRated";
import useFetchUpcoming from "../../hooks/useFetchUpcoming";

const Browse = () => {
  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRated();
  useFetchUpcoming();

  return (
    <div>
      <div className=" absolute z-10 w-screen">
        <Header />
      </div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
