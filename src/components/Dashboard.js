import SideBar from "./SideBar";
import React, { useState } from "react";

const Dashboard = () => {
    const [currentValue, setCurrentValue] = React.useState("Dashboard");
    const [activeDashboard, setActiveDashboard] = useState(true);
    const [activeSmartplug, setActiveSmartplug] = useState(false);
    const [activeProducts, setActiveProducts] = useState(false);
    const [activeGrowz, setActiveGrowz] = useState(false);
    const [activeSettings, setActiveSettings] = useState(false);
    
        return ( 
        <div>
        <SideBar activeDashboard={activeDashboard}/>
        <h1>Hello Dashboard</h1>
        </div>
     );
}
 
export default Dashboard;