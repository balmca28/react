import SideBar from "./SideBar";
import React, { useState } from "react";

const Smartplug = () => {
    const [activeSmartplug, setActiveSmartplug] = useState(true);
    return (<div>
        <SideBar activeSmartplug={activeSmartplug} />
        <h1>Smartplug</h1> 
        </div> );
}
 
export default Smartplug;