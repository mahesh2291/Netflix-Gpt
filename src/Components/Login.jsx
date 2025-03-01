import { useState } from "react"
import Header from "./Header"

const Login=() =>{

      const [isSignup,setSignup]=useState(false)

   const handleSignUp=()=>{
    setSignup(!isSignup)
   }

    return (
        <div>
            <Header />
            <img className="absolute bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/US-en-20250224-TRIFECTA-perspective_ebbccc78-aa40-42c9-bcf2-986dc9885540_small.jpg" />
                <form className="absolute bg-black w-3/12  mx-auto mt-40 align-middle  bg-opacity-80  right-0 left-0 flex flex-col justify-center items-center p-10">
                   <h1 className="text-white font-bold text-3xl ">{isSignup?  'Sign Up' : 'Sign In'}</h1>
                    <input className="border-2 bg-gray-700 p-1.5 border-black    mt-7 h-15" type="text" placeholder="Email or mobile number " />
                    {
                        isSignup && <input className="border-2 bg-gray-700 p-1.5 border-black    mt-7 h-15" type="text" placeholder="Name" />
                    }
                    <input className="border-2 text-white border-black  bg-gray-700  p-1.5 mt-7" type="password" placeholder="Password" />
                    <button className="border-2 w-40 text-white  bg-red-600 rounded-lg text-white p-1 mt-7">{isSignup?  'Sign Up' : 'Sign In'}</button>
                  <p onClick={()=>handleSignUp()}  className="text-white text-sm mt-5 cursor-pointer">{isSignup? 'Already Have Account?' : 'New to Netflix?'}<span className="font-bold">{isSignup?  'Login Now' : 'Sign up'}</span></p>
     </form>
            
       </div>
        //   <div className=" flex "> 
        //   <div className="justify-center"> 
        //      <h1>Sign In</h1>
        //     <input className="border-2" type="text" placeholder="Email or mobile number" />
        //     <input className="border-2" type="password" placeholder="Password" />
        //     <button className="border-2 bg-red-600 text-white p-1">Sign In</button>
        //     </div>
        //     </div>
        
    )
}

export default Login