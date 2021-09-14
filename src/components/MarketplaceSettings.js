import SideBar from "./SideBar";
import React, { useState } from "react";
const MarketplaceSettings = () => {
    
    const [activeMarketplaceSettings, setActiveMarketplaceSettings] = useState(true);
    return (
        <div>
            <SideBar activeMarketplaceSettings={activeMarketplaceSettings}/>
            <h1>Marketplace Settings</h1>
        </div>
      );
}
 
export default MarketplaceSettings;