import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

import '../../components/Sidebar/Sidebar.scss'
import FeastImpsBar from '../../components/FeastImpsBar/FeastImpsBar'
import Snaky from '../../components/Snaky/Snaky'
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import '../../components/NewSideBar/NewSideBar.css'

const New= () => {

  const data = [
  
  { name: "Key Market A Forward 6m", age: 1 },
  { name: "Aktienkurs X vor n Monaten", age: 0.91},
  { name: "Geschäftserwartung y", age: 0.82},
  {name:"Allianz ETF AB",age:0.75}

]
  return (

    <div className="list">
      <NewSideBar/>
      <div className="listContainer">
        <h1>Predictive analytics examines your business data or content to answer the question “What will happen?”</h1>
        <h1>Correlations - View from the Outside</h1>
        <p className="predictionstxt">The application serves as a supplement to your expertise and should help your Organisation to identify trends in
        incoming orders and sales due to changes in the market at an early stage using Machine Learning Models and enable them to take action.
         We gladly show you a visual overview of the Data Lifecycle of the application, just contact us at anytime via Mail.
         </p>
         <p>In the left drop-down menu the hierarchy level is selected, in the right menu the corresponding data points are selected.
         *(Products, KeyMarkets, etc.) The idea behind the subdivision is that you don't have to scroll through an endless list.</p>

         <br/>

        <br/><br/>

          <div className="table">

                <table>
                <h2>Price adjustment reasons</h2>
               <tr>
                  <th>Market Driver</th>
                  <th>Korrelation</th>
               </tr>
               {data.map((val, key) => {
                 return (
                   <tr key={key}>
                     <td>{val.name}</td>
                     <td>{val.age}</td>

                   </tr>
                 )
               })}
             </table><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <div className="Advtxt">
               <h3>Advanced Analytics - View from the Inside</h3>

             </div>
        </div>

        <FeastImpsBar/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <Snaky/>

      </div>
    </div>


  )
}

export default New
