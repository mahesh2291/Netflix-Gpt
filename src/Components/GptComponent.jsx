import { bgImage } from "../utils/constants"
import GptSearch from "./GptSearch"
import GptSearchBar from "./GptSearchBar"



const GptComponent=()=>{
    return (
  
        <div className="p">
            <img className="absolute -z-10" src={bgImage} />
          <GptSearchBar />
          <GptSearch />
        </div>
    )
}

export default GptComponent