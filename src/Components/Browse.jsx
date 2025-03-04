import Header from "./Header";
import useNowPlayingHook from "../hooks/useNowPlayingHook"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularHook from "../hooks/usePopularHook";
import useTopRatedHook from "../hooks/useTopRatedHook";
import useUpcomingHook from "../hooks/useUpcomingHook";
import GptComponent from "./GptComponent";
import { useSelector } from "react-redux";

const Browse=()=>{
  const gptToggle=useSelector((store)=>store.user.gpt)
 
 useNowPlayingHook()
 usePopularHook()
 useTopRatedHook()
 useUpcomingHook()

    return (
        <div>
            <Header />
            {
                gptToggle? <GptComponent /> : <><MainContainer />
           <SecondaryContainer /></>
            }
           
        </div>
    )
}

export default Browse