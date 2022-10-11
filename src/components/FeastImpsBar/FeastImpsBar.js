import React from 'react'


import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import {useEffect,useState} from 'react';
import Plot from 'react-plotly.js';
import { Bar } from 'react-chartjs-2';
import "./Feast.scss";
const FeastImpsBar = () => {

  const[model,setModel]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/trend/api/')
    .then(res => {
      return res.json();

    })
    .then(data => {
      console.log(data);
      setModel(data)


    });
  },[]);

  const data = [
          { x:model.map((mr)=>mr.Feature), y: model.map((mr)=>mr.Gini) },
      ];

  const mydata={
       labels: model.map((mr)=>mr.Feature),
       datasets: [
         {
           label: "Autocorrelation data",
           data:  model.map((mr)=>mr.pearson_correlation),
           backgroundColor: [
             "#ffbb11",
             "#ecf0f1",
             "#50AF95",
             "#f3ba2f",
             "#2a71d0"
           ]
         }
       ]
  }





  return (
    <div className="FeastChart">
      <Bar
        data={mydata}
        width="20%"
        height="10px"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Autocorrelation"
            },
            legend: {
              display: true,
              position: "bottom"
           }
          }
        }}
      />
    </div>
  )
}

export default FeastImpsBar
