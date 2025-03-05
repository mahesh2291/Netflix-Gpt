import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:[],
        trailer:[],
        popular:[],
        topRated:[],
        upComing:[],
        gptResult:[],
        movieNames:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popular=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRated=action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComing=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        gptMovieResult:(state,action)=>{
            state.gptResult=action.payload
        },
        addMovieNames:(state,action)=>{
           state.movieNames=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpComingMovies,gptMovieResult,addMovieNames}=movieSlice.actions
export default movieSlice.reducer