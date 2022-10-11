import React from 'react'

import {useEffect,useState} from 'react';
import Plot from 'react-plotly.js';
import { Line } from "react-chartjs-2";
import "./LineChart.scss"

export const options = {


  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'FeastImps Data',
    },
  },
};
const LineChart = () => {


  const[model,setModel]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/Feat_Imps/Feast_Imps_api/')
    .then(res => {
      return res.json();

    })
    .then(data => {
      console.log(data);
      setModel(data)


    });
  },[]);

  var data = {
   labels:  model.map((mr)=>mr.Feature),
   datasets: [{
     label: 'FeastImps data',
     data:   model.map((mr)=>mr.Gini),
     backgroundColor: [
       'rgba(255, 99, 132, 0.2)',
       'rgba(54, 162, 235, 0.2)',
       'rgba(255, 206, 86, 0.2)',
       'rgba(75, 192, 192, 0.2)',
       'rgba(153, 102, 255, 0.2)',
       'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
       'rgba(255, 99, 132, 1)',
       'rgba(54, 162, 235, 1)',
       'rgba(255, 206, 86, 1)',
       'rgba(75, 192, 192, 1)',
       'rgba(153, 102, 255, 1)',
       'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
   }]
 };
  return (
    
    <div className="chart">
        <div className="title"></div>
          <Line data={data}  />
    </div>

  )
}

export default LineChart
