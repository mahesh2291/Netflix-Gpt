import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer=()=>{

    const movies=useSelector((store)=>store.movie?.nowPlayingMovies)
   if(movies.length===0) return
    const  moviesData=movies[0]
    const {original_title,overview,id}=moviesData
  
    return (
       <div>
        <VideoTitle movieDetails={{original_title,overview}} />
        <VideoBackground movieId={id} />
       
       </div>
    )
}


export default MainContainer