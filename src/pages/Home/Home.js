import "./home.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/Featured/Featured";
import Mychart from '../../components/Mychart/Mychart';
import Modal from '../../components/Modal/Modal';
import ForeCastModal from '../../components/ForeCastModal/Fore';
import CostOptimizationModal from '../../components/CostOptimizingModal/CostOptimizingModal';
import BusinessModal from '../../components/BusinessAdvantagesModal/BusinessModal';
import Select from 'react-select';
import NewSideBar from "../../components/NewSideBar/NewSideBar";
import { useEffect, useState } from "react";
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "../../components/Context/context.js";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import AIInsight from '../../components/images/venn.png';
const Home =()=>{



  const [car, setCar] = useState("selectDreamCar");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFore, setModalFore] = useState(false);
  const [modalCost, setModalCost] = useState(false);
  const [modalBusiness, setModalBusiness] = useState(false);

  const [ferrariContentVisible, setFerrariContentVisible] = useState(false);
  const [benzContentVisible, setBenzContentVisible] = useState(false);
  const [audiContentVisible, setAudiContentVisible] = useState(false);

  useEffect(() => {
    car === "ferrari"
      ? setFerrariContentVisible(true)
      : setFerrariContentVisible(false);
    car === "benz" ? setBenzContentVisible(true) : setBenzContentVisible(false);
    car === "audi" ? setAudiContentVisible(true) : setAudiContentVisible(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "select your desire zone")
      : (result = makeFirstLetterCapital(car));
    return result;
  };
  const handleClick = () => {



    // implementation details
  };




    return (

        <div className="home">


            <NewSideBar/>
            <div className="homeContianer">



               <div className="widgets">
                 <Widget type="Bookings"/>
                 <Widget  type="Today Users"/>
                 <Widget type="Revenue"/>
                 <Widget type="Followers"/>


               </div>

               <div className="charts">
               <div className="mt-4">
               <select className="form-select" value={car} onChange={handleOnChange}>
                 <option value="selectDreamCar">Select your desire Zone</option>
                 <option value="ferrari">Europe Ost</option>
                 <option value="benz">Europe west</option>
                 <option value="audi">China Shengai</option>
               </select>

             </div>

             {ferrariContentVisible && <Chart />}
             {benzContentVisible && <Featured/>}
             {audiContentVisible && <Mychart />}




            </div>
            <div className="welocme">
            <p>Das Predictive Dashboard - Your transparent and reliable forecasting system.</p>

            </div><br/>
            <div className="desc">
            <p>Where is your market heading? What is your potential market growth? Which are your market drivers and how can you best be prepared for possible fast changes?</p><br/><br/>
            <p style={{fontSize:"20",fontWeight:"bold"}}>How does the mylantech Analytics Suite work?</p><br/>
            <ul>
              <li>Predictive analyzes deal with the "What will happen?“ and represent the 3rd step in Data Analytics Maturity</li><br/>
              <li>Predictive analyzes deal with the "What will happen?“ and represent the 3rd step in Data Analytics Maturity</li><br/>
              <li>Predictive analyzes deal with the "What will happen?“ and represent the 3rd step in Data Analytics Maturity</li><br/>
              <li>Predictive analyzes deal with the "What will happen?“ and represent the 3rd step in Data Analytics Maturity</li>

            </ul>
            </div>

            <div className="btnlinks">
              <p >Links & info</p>
            </div><br/>

            <div className="Buttons">

            <button  style={{backgroundColor: 'cornflowerblue',color:'white'}} onClick={() => {
                setModalOpen(true);
              }}>
              <p className="btntext">Analytics Maturity</p>
            </button> {modalOpen && <Modal setOpenModal={setModalOpen} />}<br/><br/>
            <button   style={{backgroundColor: 'cornflowerblue',color:'white'}}  onClick={() => {
                setModalFore(true);
              }} >
              <p className="btntext">Forecasting Methods</p>
            </button>{modalFore && <ForeCastModal setModalFore={setModalFore} />}<br/><br/>
            <button  style={{backgroundColor: 'cornflowerblue',color:'white'}}  onClick={() => {
                setModalCost(true);
              }}>
              <p className="btntext">Cost of OPTIMIZING</p>
            </button>{modalCost && <CostOptimizationModal setModalCost={setModalCost} />}<br/><br/>
            <button   style={{backgroundColor: 'cornflowerblue',color:'white'}}  onClick={() => {
                setModalBusiness(true);
              }}>
              <p className="btntext">BUSINESS ADVANTAGES</p>
            </button>{modalBusiness && <BusinessModal setModalBusiness={setModalBusiness} />}<br/><br/>

            </div>
            <br/><br/><br/>
            <h3 className="desc">From data to insights to actions in warehouse, price and planing optimization</h3>
              <div><img src={AIInsight} width="750" height="500"/></div>



            </div>

        </div>
    )

}

export default Home
