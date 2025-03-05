import { useRef } from "react";
import client from "../utils/openAi";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieNames, gptMovieResult } from "../Redux/movieSlice";

const GptSearchBar=()=>{
    const inputRef=useRef()
    const dispatch=useDispatch()

    const searchMovie=async (movieName)=>{
        const movie=await fetch (`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,options)
        const movieJson=await movie.json()
        return movieJson.results
       
    }


    

      const handleInput= async ()=>{

        const gptQuery="Act as a movie recommendation system and suggest some movies for the query: "+inputRef.current.value+".only guve me names of 5 movies,comma separated like the example result given ahead. Example result : Gadar,Sholay,Don,kgf,Salaar "

        const gptResults = await client.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
              
          if(!gptResults.choices) {}

          
          const gptMovies=gptResults.choices[0].message.content.split(",")
          dispatch(addMovieNames(gptMovies))

       const promiseArray=  gptMovies.map((movie)=>  searchMovie(movie))
     
       const tmdbResults=await Promise.all(promiseArray)
       dispatch(gptMovieResult(tmdbResults))
      }

    return (
        <div className="pt-[10%] flex justify-center" >
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={inputRef} type="text" className="p-4 m-4 w-full col-span-9" placeholder="What would you like to watch today?" />
                <button className="py-2 px-3 m-4 col-span-3 bg-red-700 rounded-lg" onClick={()=>handleInput()}>Search</button>
            </form>
        </div>
    )
}


export default GptSearchBar