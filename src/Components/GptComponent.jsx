import { bgImage } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearch from "./GptSearch"
import GptSearchBar from "./GptSearchBar"



const GptComponent=()=>{
    return (
  
        <div className="p">
            <img className="absolute -z-10" src={bgImage} />
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
    )
}

export default GptComponent