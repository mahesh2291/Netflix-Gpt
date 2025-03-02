import { useRef, useState } from "react"
import Header from "./Header"
import checkValidData from "../utils/Validate"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";


const Login=() =>{

      const [isSignup,setSignup]=useState(false)
      const [errorMessage,setErrorMessage]=useState(null)
      const navigate=useNavigate()
      
      const email=useRef(null)
      const password=useRef(null)
      const fullName=useRef('')

   const toggleSignUp=()=>{
    setSignup(!isSignup)
   }

   const handleButtonClick=()=>{
    //Form validation logic
    const message=checkValidData(email.current.value,password.current.value,fullName.current.value);
      setErrorMessage(message)

      if(message) return;

      if(isSignup) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode +" - "+ errorMessage)
  });
         
      } else {
      
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +" - "+ errorMessage)
        });
      }
      
   }

    return (
        <div>
            <Header />
            <img className="absolute bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/US-en-20250224-TRIFECTA-perspective_ebbccc78-aa40-42c9-bcf2-986dc9885540_small.jpg" />
                <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black w-3/12  mx-auto mt-40 align-middle  bg-opacity-80  right-0 left-0 flex flex-col justify-center items-center p-10">
                   <h1 className="text-white font-bold text-3xl ">{isSignup?  'Sign Up' : 'Sign In'}</h1>
                    <input ref={email} className="border-2 bg-gray-700 p-1.5 border-black    mt-7 h-15" type="text" placeholder="Email or mobile number " />
                    {
                        isSignup && <input ref={fullName} className="border-2 bg-gray-700 p-1.5 border-black    mt-7 h-15" type="text" placeholder="Full Name" />
                    }
                    <input ref={password} className="border-2 text-white border-black  bg-gray-700  p-1.5 mt-7" type="password" placeholder="Password" />
                    <p className="text-red-300 mt-3">{errorMessage}</p>
                    <button onClick={()=>handleButtonClick()} className="border-2 w-40 text-white  bg-red-600 rounded-lg  p-1 mt-7">{isSignup?  'Sign Up' : 'Sign In'}</button>
                  <p onClick={()=>toggleSignUp()}  className="text-white text-sm mt-5 cursor-pointer">{isSignup? 'Already Have Account?' : 'New to Netflix?'}<span className="font-bold">{isSignup?  'Login Now' : 'Sign up'}</span></p>
     </form>
            
       </div>
        
    )
}

export default Login