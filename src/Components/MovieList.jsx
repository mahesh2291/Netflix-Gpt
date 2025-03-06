import MovieCard from "./MovieCard"
import { Link } from "react-router"

const MovieList=({title,moviesNowPlaying})=>{
       console.log(moviesNowPlaying)
    return (
        <div className="p-2   bg-black opacity-80">
            <h1 className="font-bold text-2xl text-white py-4">{title}</h1>
        <div className="flex w- pt-3" >
            
            <div className="flex hover:overflow-x-scroll ">
            {
                moviesNowPlaying?.map((data)=>{
                    
                  return  <Link key={data.id} to={`/${data.title}`}>  <MovieCard   posterpath={data.poster_path} /></Link>
            
                })
            }
            </div>
        </div>
        </div>
    )
}

export default MovieList