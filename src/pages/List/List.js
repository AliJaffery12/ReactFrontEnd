import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./List.scss"
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import '../../components/NewSideBar/NewSideBar.css'
import Mychart from '../../components/Mychart/Mychart'
import Featured from '../../components/Featured/Featured'
import LineChart from '../../components/LineChart/LineChart'
import SeasonalLine from '../../components/SeasonalVisualization/SeasonalLine'
import FeastImpsBar from '../../components/FeastImpsBar/FeastImpsBar'
import Widget from "../../components/widget/Widget"

const List = () => {
  return (






    <div className="list">

      <NewSideBar/>

      <div className="listContainer">
        <h1>Diagnostic analytics examines your business data or content to answer the question “Why did it happen?”</h1><br/><br/>



            <LineChart/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Mychart/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Featured/><br/>
            <h3 className="saletext">Sales Overall Performance</h3>
            <p>The application serves as a supplement to your expertise and should help your Organisation to identify trends in incoming orders and sales due
             to changes in the market at an early stage using Machine Learning Models and enable them to take action.
            We gladly show you a visual overview of the Data Lifecycle of the application, just contact us at anytime via Mail.

            In the left drop-down menu the hierarchy level is selected, in the right menu the corresponding data points are selected. *(Products, KeyMarkets, etc.)
            The idea behind the subdivision is that you don't have to scroll through an endless list.</p>


            <div class="newwrap">



            <SeasonalLine/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <FeastImpsBar/>


            </div>







       </div>





      </div>


  )
}

export default List
