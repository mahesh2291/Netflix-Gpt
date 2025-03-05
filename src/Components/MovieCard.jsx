import { imageUrl } from "../utils/constants"


const MovieCard=({posterpath})=>{
    if(!posterpath) return null
    return (
    <img className="w-40 pr-3"  src={imageUrl+posterpath} />
    
    )
}

export default MovieCard