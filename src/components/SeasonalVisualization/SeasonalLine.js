
import React from "react";
import { Chart } from "react-google-charts";
import {useEffect,useState} from 'react';
import "./Seasonal.scss";
export const data = [
  [
    { type: "date", label: "Day" },
    "Level of Seasonality",
    "Target Variable",
  ],
  [new Date(2014, 0), -0.5, 5.7],
  [new Date(2014, 1), 0.4, 8.7],
  [new Date(2014, 2), 0.5, 12],
  [new Date(2014, 3), 2.9, 15.3],
  [new Date(2014, 4), 6.3, 18.6],
  [new Date(2014, 5), 9, 20.9],
  [new Date(2014, 6), 10.6, 19.8],
  [new Date(2014, 7), 10.3, 16.6],
  [new Date(2014, 8), 7.4, 13.3],
  [new Date(2014, 9), 4.4, 9.9],
  [new Date(2014, 10), 1.1, 6.6],
  [new Date(2014, 11), -0.2, 4.5],
];

export const options = {
  chart: {
    title: "Seasonal Visualization",
  },
  width: 900,
  height: 500,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Temps" },
    1: { axis: "Daylight" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: "Temps (Celsius)" },
      Daylight: { label: "Daylight" },
    },
  },
};



const SeasonalLine = () => {

  const[cors,setCors]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/trend/api/')
    .then(res => {
      return res.json();

    })
    .then(data => {
      console.log(data);
      setCors(data)


    });
  },[]);






  return (
    <div className="seasonalchart">
        <div className="title"></div>
        <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default SeasonalLine
