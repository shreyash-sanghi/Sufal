import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
const Routers = ()=>{
    return(
        <>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
     </Routes>  
        </>
    )
}

export default Routers;