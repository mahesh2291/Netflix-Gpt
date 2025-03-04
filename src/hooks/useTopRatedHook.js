import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {  addTopRatedMovies } from "../Redux/movieSlice"
import { options } from "../utils/constants"



const useTopRatedHook=()=>{
    const dispatch=useDispatch()
    
    
    
    const getTopRatedMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
     const dataJson=await data.json();
     dispatch(addTopRatedMovies(dataJson?.results))
       
    }
      
    useEffect(()=>{
        getTopRatedMovies()
    
    },[])
}

export default useTopRatedHook
