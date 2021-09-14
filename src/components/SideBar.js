import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar(props) {
  const [menuCollapse, setMenuCollapse] = useState(false);
  
  
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "LOGO" : "Sellergeni"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
             <MenuItem 
                active={props.activeDashboard}
                icon={<FiHome />}
                 
              >
                <Link to="/dashboard">
                Dashboard</Link>
              </MenuItem>
              
              <MenuItem 
                active={props.activeProducts}
                icon={<FaList />}
              
              >
            <Link to="/products">
            Products</Link>
              
              </MenuItem>
              <MenuItem
                active={props.activeSmartplug}
                icon={<FaRegHeart />}>
                <Link to="/smartplug">
              Smartplug</Link>
                
              </MenuItem>

              <SubMenu title="Growz" icon={<BiCog />}>
                  <MenuItem active={props.activeGrowz}><Link to="/growz">Growz</Link></MenuItem>
                  <MenuItem>All Campagins</MenuItem>
                  <MenuItem>All Adgroups</MenuItem>
                  <MenuItem>Micro goal</MenuItem>
                  <MenuItem>Reports</MenuItem>
                  
                </SubMenu>
             


              <MenuItem
                active={props.activeSettings}
                icon={<BiCog />}>
               
               <Link to="/settings">
               Settings</Link>
              </MenuItem>
              <MenuItem
                active={props.activeMarketplaceSettings}
                icon={<BiCog />}>
                   <Link to="/marketplacesettings">
               Marketplace Settings</Link>
              </MenuItem>
              <MenuItem
                active={props.activeSupport}
                icon={<BiCog />}>
               <Link to="/support">Support</Link>
              </MenuItem>
                
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      
    </>
  );
}

export default SideBar;
