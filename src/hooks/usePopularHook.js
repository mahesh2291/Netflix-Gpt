import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {  addPopularMovies } from "../Redux/movieSlice"
import { options } from "../utils/constants"



const usePopularHook=()=>{
    const dispatch=useDispatch()
    
    
    
    const getPopularMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
     const dataJson=await data.json();
     dispatch(addPopularMovies(dataJson?.results))
       
    }
      
    useEffect(()=>{
        getPopularMovies()
    
    },[])
}

export default usePopularHook
