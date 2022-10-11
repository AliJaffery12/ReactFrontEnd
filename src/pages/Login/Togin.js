import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import StockChart from '../../components/StockChart/StockChart'
import CandleStickChart  from '../../components/CandleChart/CandleChart'
import AreaChart  from '../../components/AreaChart/AreaChart'
import BoxPlot  from '../../components/BoxPlot/BoxPlot'
import  { useState, useEffect } from "react";
import '../../components/Sidebar/Sidebar.scss'
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import '../../components/NewSideBar/NewSideBar.css'
import "./login.scss"
class Togin extends React.Component {



  render() {
  return (
    <div className="list">
      <NewSideBar/>
      <div className="listContainer">
       <StockChart/>
       <CandleStickChart />
       <AreaChart/>
       <BoxPlot/>
      </div>



    </div>

  );
}}

export default Togin;
