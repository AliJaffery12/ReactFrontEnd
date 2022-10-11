import React from 'react'
import "./TimeSeries.scss"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import {useEffect,useState} from 'react';
import Plot from 'react-plotly.js';

const TimeSeries = () => {



var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: [5, 13, 24, 35, 46, 60],
  y:  [40, 70, 65, 15, 75, 49],
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x:  [40, 70, 65, 15, 75, 49],
  y:  [99, 34, 89, 67, 66, 34],
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Basic Time Series',
};





  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">

            </h1>
            <MoreVertIcon fontSize="small" />

        </div>
        <div className="bottom">
           <div className="featuredChart">
           <Plot
           data={[
          {

            data:data
          }
        ]}
        layout={{  layout:layout}



        }

      />



           </div>
           <p className="title"></p>
           <p className="amount"></p>
           <p className="desc"></p>

        </div>

    </div>
  )
}

export default TimeSeries
