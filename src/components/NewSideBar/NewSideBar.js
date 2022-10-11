import React, {useState} from 'react'
import ReactDOM from "react-dom";


import DashboardIcon from "@mui/icons-material/Dashboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from '@mui/icons-material/Person';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";

import Select from 'react-select';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "./NewSideBar.css";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

const NewSideBar = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
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
                <p>{menuCollapse ? "" : "MyLantech"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
                {menuCollapse ? (
                  <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                )}
              </div>
            </SidebarHeader>
            <SidebarContent>

            <Menu iconShape="square">


                <MenuItem active={true} icon={<FiHome />}>
                Home
                <Link to="/"> </Link>
                </MenuItem>





                  <MenuItem  active={true} icon={<FaList />}>Analytics<Link to="/analytics"></Link></MenuItem>



              <MenuItem  active={true} icon={<FaRegHeart />}>Planning   <Link to="/Planning"></Link></MenuItem>

              <MenuItem  active={true} icon={<RiPencilLine />}>Predictions   <Link to="/Predictions"></Link></MenuItem>

              <MenuItem  active={true} icon={<BiCog />}>AI Insights   <Link to="/AIinsights"></Link></MenuItem>

              <MenuItem  active={true}icon={<BiCog />}>NextStep   <Link to="/NextStep"></Link></MenuItem>
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

export default NewSideBar
