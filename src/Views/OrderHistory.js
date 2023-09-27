import { Box,  Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import DeliveryChanges from './DeliveryChanges';
import PurchaseOrders from './PurchaseOrders';


function OrderHistory() {
  // const [open,setOpen] = useState(false);
  const [age, setAge] = React.useState('');
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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