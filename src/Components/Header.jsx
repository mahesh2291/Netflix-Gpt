import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch} from "react-redux"
import { removeUser, addUser} from "../Redux/userSlice"
import { logo } from "../utils/constants";

const Header=() =>{
    const navigate=useNavigate()

    const dispatch=useDispatch()

const handleSignOut=()=>{
   
    signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
       navigate("/error")
      });
}

useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName}= user
          dispatch(addUser({
            userId: uid,
            emailId: email,
            nameDisplay:displayName
          }))
          navigate("/browse")
         
        
        } else {
          // User is signed out
         dispatch(removeUser())
         navigate("/")
     
        }
      });
      return ()=>unSubscribe()
},[])

    return (
        <div className="absolute bg-gradient-to-b from-black w-screen flex justify-between" >
            <img className="w-40 mt-5 z-50 ml-20" alt="Logo" src={logo} />
            <div className="flex">
                <img className="w-12 h-12 mt-10" src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg" />
                <button onClick={()=>handleSignOut()} className="ml-2 mr-2 mt-12 border-2 h-7 pb-1 ">Logout</button>
            </div>
       
        </div>
       
    )
}

export default Header