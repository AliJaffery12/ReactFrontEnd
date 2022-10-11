import React from "react";
import './Modal.css';
import BusinessModalImage from '../images/Business_Advantages.png';

function BusinessModal({setModalBusiness}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalBusiness(false);
            }}
          >

          </button>
        </div>

        <div className="body">
            <img src={BusinessModalImage} width="600" height="500" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalBusiness(false);
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

export default BusinessModal;
