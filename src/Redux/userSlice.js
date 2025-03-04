import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name: 'user',
    initialState:{
        user:null,
        gpt:false
    },
   
    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload
        },
        removeUser:(state)=>{
            state.user=null
        },
        gptToggle:(state)=>{
            state.gpt=!state.gpt
        }
    }
})

export const {setLogin,addUser,removeUser,gptToggle}=userSlice.actions;
export default userSlice.reducer
