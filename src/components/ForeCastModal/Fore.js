import React from "react";
import './ForeCastModal.css';
import ForeCast from '../images/Forecasting_Methods.png';

function Fore({setModalFore}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalFore(false);
            }}
          >

          </button>
        </div>

        <div className="body">
            <img src={ForeCast} width="500" height="500" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalFore(false);
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

export default Fore;
