import { BrowserRouter, Route, Routes } from "react-router"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { removeUser, addUser, setLogin } from "../Redux/userSlice"


const Body=()=>{
    
    const isLoggedIn=useSelector((store)=>store.user.isLoggedIn)

    const dispatch=useDispatch()
    

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid,email,displayName}= user
              dispatch(addUser({
                userId: uid,
                emailId: email,
                nameDisplay:displayName
              }))
              dispatch(setLogin())
            } else {
              // User is signed out
             dispatch(removeUser())
         
            }
          });
    },[])



    return (
        <div>
            <BrowserRouter>
            <Routes>
           
           <Route path="/"  element={<Login />} />
           <Route path="/browse" element={<Browse />} />
       
           </Routes>
           </BrowserRouter>
           
        </div>
    )
}

export default Body