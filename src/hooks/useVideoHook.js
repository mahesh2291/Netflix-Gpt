import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../Redux/movieSlice";
import { options } from "../utils/constants";

const useVideoHook=(movieId)=>{
    const dispatch=useDispatch()

     const getMovieVideos=async()=>{
         const data=await fetch("https://api.themoviedb.org/3/movie/"+ `${movieId}`+"/videos?language=en-US",options);
         const dataJson=await data.json()
        
        

         const filteredTrailer=dataJson.results.filter(video=>video.type==="Trailer")
            
          dispatch(addTrailer(filteredTrailer[0]))
     }

     useEffect(()=>{
         getMovieVideos()
         
     },[])
}

export default useVideoHook