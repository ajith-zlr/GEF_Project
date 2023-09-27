import { Box,  Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import DeliveryChanges from './DeliveryChanges';
import PurchaseOrders from './PurchaseOrders';


function OrderHistory() {
  const [value, setValue] = React.useState(0);

  const handleTab = (event, newValue) => {
    setValue(newValue);
  };


  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  
  return (
    <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, pr: 5, pl: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight={"bold"}>Order History</Typography>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={value} onChange={handleTab} aria-label="basic tabs example">
            <Tab label="Purchase Orders" />
            <Tab label="Delivery Changes" />

          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} >
          <PurchaseOrders />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <DeliveryChanges />
        </CustomTabPanel>

      </Box>
    </Box>
  )
}

export default OrderHistory