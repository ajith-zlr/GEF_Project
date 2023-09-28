import React from "react";
import ReusableTable from "../Constants/ReusableTable";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const columns = [
  { id: "Product", label: "Product" },
  { id: "Mode", label: "Mode" },
  { id: "Location", lable: "Location" },
  { id: "Broker", label: "Broker" },
  { id: "Date", label: "Date" },
  { id: "Price", label: "Price" },
  // Add more columns as needed
];

const data = [
  { id: 1, Product: "John", Mode: 30, Location: "Agra" },
  { id: 2, Product: "Alice", Mode: 25, Location: "Delhi" },
  // Add more data rows as needed
];
export const PriceReport = () => {
  return (
    <div>
      <Typography variant="h3">Price Report</Typography>
   
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Tabs>
            <Tab label="Opening Price" />
            <Tab label="Purchase Price" />
          </Tabs>
        </Box>
        <br></br>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Typography>From & to Dates </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
          <Select id="demo-simple-select" value={data} label="Location">
            <InputLabel htmlFor="demo-customized-textbox">Location</InputLabel>
            {data.map((x) => (
              <>
                <MenuItem value={x.Location}>{x.Location}</MenuItem>
              </>
            ))}
          </Select>
          <Select id="demo-simple-select" value={data} label="Product">
            {data.map((x) => (
              <>
                <MenuItem value={x.Product}>{x.Product}</MenuItem>
              </>
            ))}
          </Select>
          <Button variant="contained">Search</Button>
        </Box>
       
        <Typography align="left">Average Price (INR):</Typography>
        <ReusableTable columns={columns} data={data} />
     
    </div>
  );
};
