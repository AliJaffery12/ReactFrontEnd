import React from 'react'
import ReactDOM from "react-dom";

import './Sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from '@mui/icons-material/Person';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";

import Select from 'react-select';
const Sidebar = () => {




    return(









    <div className="sidebar">

       <div className="top">

          <span className='logo'>MyLantech</span>

       </div>
       <hr/>
       <div className="center">
        <ul>
        <Link to="/analytics">
            <li>

                     <span className="dashboardtext">Analytics</span>&nbsp;



            </li>
        </Link>
            <br/>
            <Link to="/Planning">
            <li>

            <span className="tableheading">Planning</span>


            </li>
            </Link>
            <br/>
            <Link to="/Predictions">
            <li>

                <span className="tableheading">Predictions</span>

            </li></Link><br/>
            <Link to="/AIinsights">
            <li>

                <span className="notificationheading">AI Insights</span>

            </li>
            </Link>
            <br/>
            <Link to="/NextStep">
            <li>

                <span className="profileheading">Next Steps</span>

            </li>
            </Link>
            <br/>
            <li>


            </li>
            <br/>
            <li>


            </li>




        </ul>
       </div>
       <div className="bottom"></div>

    </div>
    )

}

export default Sidebar
