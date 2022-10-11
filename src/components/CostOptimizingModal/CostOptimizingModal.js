import React from "react";
import './Modal.css';
import CostOptimizingImage from '../images/Cost_Optimization.png';

function CostOptimizingModal({setModalCost}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalCost(false);
            }}
          >

          </button>
        </div>

        <div className="body">
            <img src={CostOptimizingImage} width="600" height="500" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalCost(false);
              console.log("Änalytics forecast Click ho raha ha");
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

export default CostOptimizingModal;
