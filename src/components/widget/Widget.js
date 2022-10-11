import React from 'react'
import './Widget.scss'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
const Widget = ({type}) => {

  let data;
  // tremporary data
  
  switch (type){
    case 'Bookings':
      data={
        title:'Bookings',
        counter:281,
        link:'Last updated details',
        icon:<InventoryIcon className='icon' style={{color:"white",backgroundColor:"black"}}/>

      };
      break;
      case 'Today Users':
      data={
        title:'Today Users',
        counter:388,
        link:'Last updated details',
        icon:<LeaderboardIcon  className='icon' style={{color:"white",backgroundColor:"rgba(40, 139, 222, 1)"}}/>
        

      };
      break;
      case 'Revenue':
      data={
        title:'Revenue',
        counter:400,
        link:'Last updated details',
        icon:<AdfScannerIcon className='icon' style={{color:"white",backgroundColor:"rgba(144, 255, 159, 1)"}}/>

      };
      break;
      case 'Followers':
      data={
        title:'Followers',
        counter:281,
        link:'Last updated details',
        icon:<GroupAddIcon className='icon'  style={{color:"white",backgroundColor:"rgba(247, 103, 145, 1)"}}/>

      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.counter}</span>
            <span className='link'>{data.link}</span>
            
        </div>
        <div className='right'>
            <div className='percentage positive '>
            <span className='icon'>{data.icon}</span>

            </div>
            

            
        </div>
    </div>
  )
}

export default Widget
