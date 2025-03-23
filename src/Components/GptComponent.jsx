import { bgImage } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearch from "./GptSearch"
import GptSearchBar from "./GptSearchBar"



const GptComponent=()=>{
    return (
        <>
        <div className="fixed -z-10">
            <img className="h-screen w-screen object-cover" src={bgImage} />
            </div> 
        <div className="pt-[30%] md:p-0">
           
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
        </>
    )
}

export default GptComponent