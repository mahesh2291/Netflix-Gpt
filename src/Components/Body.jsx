import { BrowserRouter, Route, Routes } from "react-router"
import Browse from "./Browse"
import Login from "./Login"

const Body=()=>{
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