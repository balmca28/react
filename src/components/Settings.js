import SideBar from "./SideBar";
import React, { useState } from "react";
const Settings = () => {
    const [activeSettings, setActiveSettings] = useState(true);
    return (
        <div>
            <SideBar activeSettings={activeSettings}/>
            <h1>Settings</h1>
        </div>
      );
}
 
export default Settings;