import MovieCard from "./MovieCard"

const MovieList=({title,moviesNowPlaying})=>{
   
    return (
        <div className="p-2  bg-black">
            <h1 className="font-bold text-2xl text-white py-4">{title}</h1>
        <div className="flex pt-3" >
            
            <div className="flex hover:overflow-x-scroll ">
            {
                moviesNowPlaying?.map((data)=>{
                  return <MovieCard key={data.id} posterpath={data.poster_path} />
                })
            }
            </div>
        </div>
        </div>
    )
}

export default MovieList