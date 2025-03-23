import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer=()=>{

    const nowPlayingMoviesList=useSelector((store)=>store.movie.nowPlayingMovies)
    const popularMovieList=useSelector((store)=>store.movie.popular)
    const topRatedMovieList=useSelector((store)=>store.movie.topRated)
    const upComingMovieList=useSelector((store)=>store.movie.upComing)


    return (
       <div className="mt-0 md:-mt-60 pl-30 relative z-20 bg-black">
        <MovieList title={"Now Playing"} moviesNowPlaying={nowPlayingMoviesList} />
        <MovieList title={"Top Rated"} moviesNowPlaying={topRatedMovieList} />
        <MovieList title={"Trending"} moviesNowPlaying={popularMovieList} />
        <MovieList title={"Upcoming"} moviesNowPlaying={upComingMovieList} />
       </div>
    )
}

export default SecondaryContainer