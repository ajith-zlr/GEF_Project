import { Box, Button, FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';



function BaseTemplate({ name, broker, setBroker, supplier, setSupplier, status, setStatus, searchFunction }) {


    const handleChange1 = (event) => {
        setBroker(event.target.value);
    };
    const handleChange2 = (event) => {
        setSupplier(event.target.value);
    };

    const handleChange3 = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, pr: 5, pl: 5 }}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box sx={{ display: "flex", alignItems: "start", justifyContent: "space-evenly", gap: 2 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 2 }}>
                                <Typography>From & To Dates:</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Basic date picker" />
                                    </DemoContainer>
                                </LocalizationProvider> </Box>
                            <Box>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 410, border: "1px solid" }}
                                >
                                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <InputBase
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Search By PO Number"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />

                                </Paper>
                            </Box>
                        </Box>
                        <Box sx={{ minWidth: 150 }}><FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Broker</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={broker}
                                label="Broker"
                                onChange={handleChange1}
                            >

                                <MenuItem value={10}>Rajesh</MenuItem>
                                <MenuItem value={20}>Kiran</MenuItem>
                            </Select>
                        </FormControl></Box>
                        <Box sx={{ minWidth: 120 }}><FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Supplier</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={supplier}
                                label="Supplier"
                                onChange={handleChange2}
                            >

                                <MenuItem value={10}>Rajesh Traders</MenuItem>
                                <MenuItem value={20}>Rizwan</MenuItem>
                            </Select>
                        </FormControl></Box>
                        {name === "DeliveryChanges" && <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">QC Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    label="QC Status"
                                    onChange={handleChange3}
                                >
                                    <MenuItem value={10}>Accepted</MenuItem>
                                    <MenuItem value={20}>Rejected</MenuItem>
                                    <MenuItem value={30}>Accepeted With</MenuItem>
                                </Select>

                            </FormControl>
                            <Box>

                            </Box>
                        </Box>}
                        <Box>
                            <Button variant='contained' onClick={searchFunction}>Search</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default BaseTemplate