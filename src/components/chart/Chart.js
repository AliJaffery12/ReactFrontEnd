import React from 'react'
import "./Chart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import {useEffect,useState} from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Chart = () => {
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
  var data = {
    labels: trend.map((tr)=>tr.date),
    datasets: [{
      label: 'Trend Data',
      data: trend.map((tr)=>tr.Europa_Ost),
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

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }
  return (
    <div className="chart">

    <Line
      data={data}
      height={400}
      options={options}

    />
    </div>
  )
}

export default Chart
