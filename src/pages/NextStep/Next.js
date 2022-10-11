import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

import '../../components/Sidebar/Sidebar.scss'
import FeastImpsBar from '../../components/FeastImpsBar/FeastImpsBar'
import Snaky from '../../components/Snaky/Snaky'
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import '../../components/NewSideBar/NewSideBar.css'
import "./Next.scss";
import CostDiver from '../../components/CostDriverModal/CostDriverModal';
import MarketModel from '../../components/Market_Intelligence/Market_Intelligence';
import ReactTable from "react-table";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

import "react-table/react-table.css";


const Next= () => {
  const [modalDriver, setModalDriver] = useState(false);
    const [modalMarket, setModalMarket] = useState(false);
  const data = [
  { name: "Increased Material Costs", age: 24 },
  { name: "Increased Labor Costs", age: 10 },
  { name: "Increased Energy Costs", age: 25},
  { name: "Import Prices", age: 10},

]
const Marketdata = [

{ name: "Key Market X", age: 24 },
{ name: "PMI USA", age:13},


]
const ProductOrderdata = [

{ name: "Product A", per: "74%" },
{ name: "Product B", per: "-20%"},


]



  return (

    <div className="list">
      <NewSideBar/>
      <div className="nextlistContainer">
          <h1>Smart Pricing by mylantech</h1>
        <div className="sanky">
          <Snaky/>




        </div>








        <div className="table">

        <table>

       <tr>
          <th>Price adjustment reasons</th>

       </tr>
       {data.map((val, key) => {
         return (
           <tr key={key}>
             <td>{val.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <td>{val.age}%</td>

           </tr>
         )
       })}
     </table>


     <div className="btncostdrivers">

     <button   style={{backgroundColor: 'cornflowerblue',color:'white'}}  onClick={() => {
         setModalDriver(true);
       }} >
       <p className="btntext">Common Cost Driver</p>
     </button>{modalDriver && <CostDiver setModalDriver={setModalDriver} />}<br/><br/>
     </div>


     </div>
     <p className="markettxt">Market Intelligence - Your current Alerts</p><br/>
      <br/><br/><br/><br/><br/><br/>
     <div className="markettable">

     <table>

    <tr>
       <th>Changes to observe on the Market</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <th>in €</th>
    </tr>
    {Marketdata.map((val, key) => {
      return (
        <tr key={key}>
          <td>{val.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>{val.age}%</td>

        </tr>
      )
    })}
  </table>





  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <div className="producttable">
  <table>

  <thead>
 <tr>
 <th>Changes to observe on the Market</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <th>in €</th>

 </tr>
 </thead>
 <tbody>
  {ProductOrderdata.map((val, key) => {
   return (
     <tr key={key}>
       <td>{val.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <td>{val.per}</td>

     </tr>
   )
 })}
</tbody>
</table>
<div className="btnmarketalert">

<button   style={{backgroundColor: 'cornflowerblue',color:'white'}}  onClick={() => {
    setModalMarket(true);
  }} >
  <p className="btntext">Market Alert</p>
</button>{modalMarket && <MarketModel setModalMarket={setModalMarket} />}<br/><br/>
</div>

</div>







      </div>

    </div>


  )
}

export default Next
