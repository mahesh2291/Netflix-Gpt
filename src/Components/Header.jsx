import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Header=() =>{
    const navigate=useNavigate()
const handleSignOut=()=>{
   
    signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
       navigate("/error")
      });
}


    return (
        <div className="absolute bg-gradient-to-b from-black w-screen flex justify-between" >
            <img className="w-40 mt-5 z-50 ml-20" alt="Logo" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" />
            <div className="flex">
                <img className="w-12 h-12 mt-10" src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg" />
                <button onClick={()=>handleSignOut()} className="ml-2 mr-2 mt-12 border-2 h-7 pb-1 ">Logout</button>
            </div>
       
        </div>
       
    )
}

export default Header