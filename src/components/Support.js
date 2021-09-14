import SideBar from "./SideBar";
import React, { useState } from "react";
const Support = () => {
    const [activeSupport, setActiveSupport] = useState(true);
    return (
        <div>
            <SideBar activeSupport={activeSupport}/>
            <h1>Support</h1>
        </div>
      );
}
 
export default Support;