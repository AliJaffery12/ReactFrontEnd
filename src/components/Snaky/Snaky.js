import React from 'react'


import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import {useEffect,useState} from 'react';
import Plot from 'react-plotly.js';

const Snaky = () => {








  return (
    <div className="yfeatured">
        <div className="top">
            <h1 className="title">

            </h1>


        </div>
        <div className="bottom">
           <div className="featuredChart">
           <Plot
        data={[
          {
            type: "sankey",
          

            orientation: "h",
            node: {
              pad: 15,
              thickness: 30,
              line: {
                color: "black",
                width: 0.5
              },
             label: ["Uniper", "JET", "STOCK", "BMW", "AUDI", "WW"],
             color: ["blue", "green", "yellow", "black", "gray", "blue"]
                },

            link: {
              source: [0,1,0,2,3,3],
              target: [2,3,3,4,4,5],
              value:  [8,4,2,8,4,2]
          }
        }]}

        layout={{
          title: "Basic Sankey",
          font: {
            size: 10
          }
        }}

      />



           </div>
           <p className="title"></p>
           <p className="amount"></p>
           <p className="desc"></p>

        </div>

    </div>
  )
}

export default Snaky
