import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:[],
        trailer:[],
        popular:[],
        topRated:[],
        upComing:[]
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
        }
    }
})

export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpComingMovies}=movieSlice.actions
export default movieSlice.reducer