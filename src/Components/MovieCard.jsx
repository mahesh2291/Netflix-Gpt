import { imageUrl } from "../utils/constants"


const MovieCard=({posterpath})=>{
    return (
    <img className="w-40 pr-3"  src={imageUrl+posterpath} />
    
    )
}

export default MovieCard