import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import { gptMovieResult } from "../Redux/movieSlice"



const GptMovieSuggestion=()=>{

    const {gptResult,movieNames}=useSelector((store)=>store.movie)
 
    if(!movieNames) return null

    return (
        <div className="mt-5  text-white bg-opacity-70">
           <div>
          {
            movieNames?.map((movieName,index)=> <MovieList key={movieName} title={movieName} moviesNowPlaying={gptResult[index]} />)
          }
            </div>
        </div>
    )
}


export default GptMovieSuggestion