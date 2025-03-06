import { BrowserRouter, Route, Routes } from "react-router"
import Browse from "./Browse"
import Login from "./Login"
import MoviePage from "./MoviePage"



const Body=()=>{
    
    return (
        <div>
            <BrowserRouter>
            <Routes>
           
           <Route path="/"  element={<Login />} />
           <Route path="/browse"  element={<Browse />} />
           <Route path='/:movieId' element={<MoviePage />} />
           </Routes>
           </BrowserRouter>
           
        </div>
    )
}

export default Body