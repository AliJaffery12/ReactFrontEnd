import React from 'react'
import "./featured.scss"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import {useEffect,useState} from 'react';
import Plot from 'react-plotly.js';

const Featured = () => {

  const[model,setModel]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/model_pred/model_pred_api/')
    .then(res => {
      return res.json();

    })
    .then(data => {
      console.log(data);
      setModel(data)


    });
  },[]);


const graphData = {
   x:  model.map((mr)=>mr.date),
   y:  model.map((mr)=>mr.Target_Variable),
   z:  model.map((mr)=>mr.Forecast),
  masterGraph: {
    title: "Model Prediction csv 3d Analysis",
    xAxis: "X-Axis",
    yAxis: "Y-Axis",
    zAxis: "Z-Axis"
  }
};



  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">

            </h1>


        </div>

           <div className="myfeaturedChart">
           <Plot
        data={[
          {
            type: "surface",
            x: graphData.x,
            y: graphData.y,
            z: graphData.z
          }
          ]}

        layout={{
          width: 600,
          height: 300,
          margin: {
            l: 50,
            r: 50,
            b: 80,
            t: 90,
            pad: 4
          },
          title: graphData.masterGraph.title,
          annotations: [
            {
              text: graphData.masterGraph.model,
              font: {
                size: 14,
                color: "#444444"
              },
              showarrow: false,
              align: "center",
              x: 0.5,
              y: 1.1,
              xref: "paper",
              yref: "paper"
            }
          ],
          scene: {
            xaxis: {
              title: graphData.masterGraph.xAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            yaxis: {
              title: graphData.masterGraph.yAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            zaxis: {
              title: graphData.masterGraph.zAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            }
          }
        }}
      />



           </div>
           <p className="title"></p>
           <p className="amount"></p>
           <p className="desc"></p>

        

    </div>
  )
}

export default Featured
