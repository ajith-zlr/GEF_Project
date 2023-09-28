import "./OrderDetailsPopup.css";
import * as React from "react";
import Popover from "@mui/material/Popover";
import {
  Typography,
  TableCell,
  Table,
  TableHead,
  TableRow,
} from "@mui/material";

function OrderDetailsPopup({ supplier }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {supplier}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="popup">

            <h4 style={{textAlign: "center"}}>OrderDetails</h4>
          <div className="showpopup">
            <div style={{ textAlign: "center" }}>
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

            <table className="tb">
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
      </Popover>
    </div>
  );
}
export default OrderDetailsPopup;
