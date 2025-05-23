import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../Redux/movieSlice"
import { options } from "../utils/constants"



const useNowPlayingHook=()=>{
    const dispatch=useDispatch()
    
    
    
    const getNewPlayingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options)
     const dataJson=await data.json();
     dispatch(addNowPlayingMovies(dataJson?.results))
       
    }
      
    useEffect(()=>{
     getNewPlayingMovies()
    
    },[])
}

export default useNowPlayingHook
