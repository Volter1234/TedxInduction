import React from "react";
import Heading from "./heading";
import About from "./about";
import Colours from "./colors";
import Size from "./size";
import Add from "./add";

function Rest(){
    return(
        <div className="RestComp">
        <Heading/>
        <About/>
        <Colours/>
        <Size/>
        <Add/>
        </div>
    );
}

export default Rest;