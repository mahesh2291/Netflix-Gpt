import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularHook from "../hooks/usePopularHook";
import useTopRatedHook from "../hooks/useTopRatedHook";
import useUpcomingHook from "../hooks/useUpcomingHook";

const Browse=()=>{
  
 useNowPlayingHook()
 usePopularHook()
 useTopRatedHook()
 useUpcomingHook()

    return (
        <div>
            <Header />
           <MainContainer />
           <SecondaryContainer />
        </div>
    )
}

export default Browse