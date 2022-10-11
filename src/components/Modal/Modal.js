import React from "react";
import "./Modal.css";
import AnalyticalImage from "../images/Analytics_Maturity.png";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >

          </button>
        </div>

        <div className="body">
            <img src={AnalyticalImage} width="500" height="500" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
              console.log("Änalytics Click ho raha ha")
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

export default Modal;
