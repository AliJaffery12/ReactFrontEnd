

import "./StockChart.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useEffect,useState} from 'react';
import React, { Component } from 'react'
import priceData from './btcdata.json'


import Plot from 'react-plotly.js';
import moment from 'moment'
class StockChart extends React.Component  {


  constructor(props){
   super(props);
   this.state = {
     stockChartXValues: [],
     stockChartYValues: []
   }
 }

 componentDidMount()  {
   this.fetchStock();
 }

 fetchStock(){
   const pointerToThis = this;
   console.log(pointerToThis);
   const API_KEY = ' G63XGMZVDWKCUR4H.';
   let StockSymbol = 'FB';
   let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DAI.DEX&outputsize=full&apikey=demo`;
   let stockChartXValuesFunction = [];
   let stockChartYValuesFunction = [];

   fetch(API_Call)
     .then(
       function(response) {
         return response.json();
       }
     )
     .then(
       function(data) {
         console.log(data);

         for (var key in data['Time Series (Daily)']) {
           stockChartXValuesFunction.push(key);
           stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
         }

         // console.log(stockChartXValuesFunction);
         pointerToThis.setState({
           stockChartXValues: stockChartXValuesFunction,
           stockChartYValues: stockChartYValuesFunction
         });
       }
     )
 }
 render() {
    return (
      <div>
        <h1>German Stock Data </h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'blue'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
    )
  }


}

export default StockChart
