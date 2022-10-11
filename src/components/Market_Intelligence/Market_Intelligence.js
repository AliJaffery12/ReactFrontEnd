import React from "react";
import './Market_Intelligence.css';
import MarketIntelligence from '../images/Market_Intelligence.png';

function Market({setModalMarket}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalMarket(false);
            }}
          >

          </button>
        </div>

        <div className="body">
            <img src={MarketIntelligence} width="500" height="500" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalMarket(false);
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

export default Market;
