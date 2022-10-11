import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./AIinsight.scss"
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import '../../components/NewSideBar/NewSideBar.css'
import Mychart from '../../components/Mychart/Mychart'
import Featured from '../../components/Featured/Featured'
import LineChart from '../../components/LineChart/LineChart'
import SeasonalLine from '../../components/SeasonalVisualization/SeasonalLine'
import FeastImpsBar from '../../components/FeastImpsBar/FeastImpsBar'
import BoxPlot  from '../../components/BoxPlot/BoxPlot'
const AIinsight = () => {
  return (






    <div className="list">
      <NewSideBar/>
      <div className="listContainer">
        <BoxPlot/>




      </div>
    </div>

  )
}

export default AIinsight
