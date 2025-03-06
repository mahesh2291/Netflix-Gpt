import { useEffect } from "react"
import { useParams } from "react-router"
import { imageUrl, options } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addMoviePageResults } from "../Redux/movieSlice"

const MoviePage=()=>{
    const moviePageResults=useSelector((store)=>store.movie.moviePageResults)
    const {movieId}=useParams()
    const dispatch=useDispatch()
    const {title,release_date,overview,backdrop_path}=moviePageResults

const searchMovie=async (movieName)=>{
        const movie=await fetch (`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,options)
        const movieJson=await movie.json()
        const exactMovie=movieJson.results.filter((movie)=>movie.title===movieId)
        dispatch(addMoviePageResults(exactMovie[0])) 
    }

    useEffect(()=>{
        searchMovie(movieId)
    },[])
    
    return (
        <div className=" bg-black  text-white text-center">
        <div className="pl-5 pr-5">
            <h1 className="text-white text-5xl pt-5 ">Movie Name-<span>{title}</span></h1>
            <p className="pt-5">Overview-{overview}</p>
            <p>Release Date- {release_date}</p>
            <img className=" mx-auto my-0 pb-10 mt-5"  src={imageUrl+backdrop_path} />
        </div>
        </div>
    )
}

export default MoviePage