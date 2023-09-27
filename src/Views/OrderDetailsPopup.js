import React, { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";

const OrderDetailsPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const showPopup = () => {
    setPopupOpen(true);
  };

  const hidePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
      <h3>OrderDetailsPopup</h3>
      <Button variant="contained" onClick={showPopup}>
        DetailsPopup
      </Button>
      &emsp;
      <Button variant="outlined" onClick={hidePopup}>
        closePopup
      </Button>
      {isPopupOpen && (
        <div className="popup">
          <div className="showpopup">
            <div style={{textAlign:"center"}}>
              <p>Po Number : 923857</p>
              <p>Po Date : 17/07/203</p>
              <p>Delivery Location : Kakinada</p>
              <p>Product : Sun Flower</p>
            </div>
            <div>
              <p>Supplier ID : 923857</p>
              <p>Supplier Name : Rajesh Traders</p>
              <p>Broker Name : kiran</p>
              <p>Mode : Direct</p>
            </div>
            <div style={{ alignItems: "flex-start" }}>
              <p>Offer ID : G3456</p>
              <p>Offer Date : 17/07/2023</p>
            </div>

            <table>
              <tr>
                <th>Delivery Date</th>
                <th>Qty (MT)</th>
              </tr>
              <tr>
                <td>20/07/2023</td>
                <td>15</td>
              </tr>
              <tr>
                <td>25/07/2023</td>
                <td>25</td>
              </tr>
            </table>
            <div>
              <p>Terms & Quality Metrics:</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>1.</p>
                <p>2.</p>
                <p>3.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPopup;
