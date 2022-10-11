import React from "react";
import './Modal.css';
import CostDriverImage from '../images/Cost_Drivers.png';

function CostDriverModal({setModalDriver}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalDriver(false);
            }}
          >

          </button>
        </div>

        <div className="body">
            <img src={CostDriverImage} width="500" height="400" />
        </div><br/><br/>
        <div className="footer">
        <button
          onClick={() => {
            setModalDriver(false);
            console.log("Cost Driver Exit is Working");

          }}
          id="cancelBtn"
        >
          Close
        </button>

        </div>
      </div>
    </div>
  );
}

export default CostDriverModal;
