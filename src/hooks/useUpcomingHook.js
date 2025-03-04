import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addUpComingMovies } from "../Redux/movieSlice"
import { options } from "../utils/constants"



const useUpcomingHook=()=>{
    const dispatch=useDispatch()
    
    
    
    const getupComingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options)
     const dataJson=await data.json();
     dispatch(addUpComingMovies(dataJson?.results))
       
    }
      
    useEffect(()=>{
     getupComingMovies()
    
    },[])
}

export default useUpcomingHook
