import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { setLogin } from "../Redux/userSlice"
import Header from "./Header"

const Browse=()=>{

    const  data=useSelector((store)=>store.user.isLoggedIn)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(setLogin())
    },[])
 
    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse