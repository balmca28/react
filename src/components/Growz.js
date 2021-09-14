import SideBar from "./SideBar";
import React, { useState } from "react";

const Growz = () => {
    const [activeGrowz, setActiveGrowz] = useState(true);
    return ( 
        <div>
            <SideBar activeGrowz={activeGrowz}/>
            <h1>Growz</h1>
        </div>
     );
}
 
export default Growz;