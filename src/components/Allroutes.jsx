import React from "react";
import { Route, Routes } from "react-router-dom";
import {Banner} from "./Banner"
import About from "./About"
import {Skills} from "./Skills"
import Projects from "./Projects"
import {Contact} from "./Contact"
// import Resume from "./Resume";
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Banner/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path='/skills' element={<Skills/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                {/* <Route path ='/resume' element={<Resume/>}></Route> */}
            </Routes>
        </div>
    )
}

export default AllRoutes;
