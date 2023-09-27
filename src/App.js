import React from "react";
import OrderDetailsPopup from "./Views/OrderDetailsPopup";
import Invoice from "./Views/Invoice";

const App = () => {
  return (
    <div>
      <center>
        <OrderDetailsPopup />
        <Invoice />
      </center>
    </div>
  );
};

export default App;
