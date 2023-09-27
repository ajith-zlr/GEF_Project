import React from "react";
import OrderDetailsPopup from "./Views/OrderDetailsPopup";

const App = () => {
  return (
    <div>
      <center>
        <OrderDetailsPopup />
      </center>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import './App.css';


// const App = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => {
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="App">
//       <button onClick={openPopup}>Show Popup</button>
//       {isPopupOpen && (
        
          
//           <div className="popup">
//             <div className="showpopup">
//               <div>
//                 <p>Po Number : 923857</p>
//                 <p>Po Date : 17/07/203</p>
//                 <p>Delivery Location : Kakinada</p>
//                 <p>Product : Sun Flower</p>
//               </div>
//               <div>
//                 <p>Supplier ID : 923857</p>
//                 <p>Supplier Name : Rajesh Traders</p>
//                 <p>Broker Name : kiran</p>
//                 <p>Mode : Direct</p>
//               </div>
//               <div style={{ alignItems: "flex-start" }}>
//                 <p>Offer ID : G3456</p>
//                 <p>Offer Date : 17/07/2023</p>
//               </div>

//               <table>
//                 <tr>
//                   <th>Delivery Date</th>
//                   <th>Qty (MT)</th>
//                 </tr>
//                 <tr>
//                   <td>20/07/2023</td>
//                   <td>15</td>
//                 </tr>
//                 <tr>
//                   <td>25/07/2023</td>
//                   <td>25</td>
//                 </tr>
//               </table>
//               <div>
//                 <p>Terms & Quality Metrics:</p>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                   }}
//                 >
//                   <p>1.</p>
//                   <p>2.</p>
//                   <p>3.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
        
        
//       )}
//     </div>
//   );
// };

// export default App;
