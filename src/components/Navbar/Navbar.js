import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListIcon from '@mui/icons-material/List';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <SearchIcon/>&nbsp;
          <input type="text" placeholder="Search...."/>&nbsp;&nbsp;&nbsp;&nbsp;

          <div className='item'>
            <AccountCircleIcon className='icon'/>&nbsp;&nbsp;&nbsp;&nbsp;
          </div> 
          <div className='item'>
            <SettingsIcon className='icon'/>
          </div>&nbsp;&nbsp;&nbsp;
          <div className='item'>
            <NotificationsIcon className='icon'/>
            
          </div>&nbsp;&nbsp;&nbsp;
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
          
        </div>
        
      
      </div>
      
    </div>
  )
}

export default Navbar
