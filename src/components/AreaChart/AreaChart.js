import React from "react";
import { Chart } from "react-google-charts";
import {useState,useEffect} from 'react';



export const data = [
["Year", "Sales", "Expenses"],
["2013", 1000, 400],
["2014", 1170, 460],
["2015", 660, 1120],
["2016", 1030, 540],
];

export const options = {

hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
vAxis: { minValue: 0 },
chartArea: { width: "50%", height: "70%" },
};

const AreaChart = () => {
  const[trend,setTrend]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/trend/trendapi/')
    .then(res => {
      return res.json();

    })
    .then(data => {
      console.log(data);
      setTrend(data)


    });
  },[]);


  return (

    <div className="chart">
      <h3>Company Performance</h3>
    <Chart
   chartType="AreaChart"
   width="100%"
   height="400px"
   data={data}
   options={options}
 />
    </div>
  )
}

export default AreaChart
