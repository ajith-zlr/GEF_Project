import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import React from 'react'
import BaseTemplate from './BaseTemplate';

function PurchaseOrders() {
    const [broker, setBroker] = React.useState('');
   
    function createData(name, calories, fat, carbs, protein,food,food1) {
        return { name, calories, fat, carbs, protein, food,food1 };
    }
    const rows = [
        createData('G3452',0 , 0, 34523, 'Rajesh Traders','kiran','Approval Pending'),
        createData('G3454',0, 0, 34523, 'Rajesh Traders','kiran','Approved'),
        createData('G3456', 923857, 17,34523, 'Rajesh Traders','kiran','Approved'),
     
    ];
    const searchFunction = () => {
        console.log(broker, "broker")
    }
    return (
        <>
            <BaseTemplate name={"PurchaseOrders"} setBroker={setBroker} broker={broker} searchFunction={searchFunction}/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Offer ID</TableCell>
                            <TableCell align="right">PO Number</TableCell>
                            <TableCell align="right">PO Date&nbsp;(g)</TableCell>
                            <TableCell align="right">Supplier ID&nbsp;(g)</TableCell>
                            <TableCell align="right">Supplier Name&nbsp;(g)</TableCell>
                            <TableCell align="right">Broker Name&nbsp;(g)</TableCell>
                            <TableCell align="right">Status&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.food}</TableCell>
                                <TableCell align="right">{row.food1}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default PurchaseOrders;