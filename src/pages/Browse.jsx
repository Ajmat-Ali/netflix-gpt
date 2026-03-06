import Header from "../components/Header";
import { MainContainer } from "../components/browse/MainContainer";
import SecondaryContainer from "../components/browse/SecondaryContainer";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcoming from "../hooks/useFetchUpcoming";
import { useSelector } from "react-redux";
import GptMain from "../components/gpt/GptMain";

const Browse = () => {
  const toggleSearchValue = useSelector((store) => store.gpt.toggleSearchValue);

  useFetchNowPlayingMovies();
  useFetchPopularMovies();
  useFetchTopRated();
  useFetchUpcoming();

  return (
    <div>
      <div className=" absolute z-10 w-screen">
        <Header />
      </div>
      <div className="flex flex-col">
        {toggleSearchValue ? (
          <GptMain />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
