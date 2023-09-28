import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Popover } from '@mui/material'
import React from 'react'
import BaseTemplate from './BaseTemplate';
import Invoice from './Invoice';

function PurchaseOrders() {
    const [broker, setBroker] = React.useState('');
    const [supplier, setSupplier] = React.useState('');

    const handleInvoiceHover = () => {
        console.log('Invoice component is being hovered.');
    };

    function createData(OfferID, PONum, PODate, supplierId, supplierName, broker, status) {
        return { OfferID, PONum, PODate, supplierId, supplierName, broker, status };
    }
    const rows = [
        createData('G3452', 0, 0, 34523, 'Rajesh Traders', 'kiran', 'Approval Pending'),
        createData('G3454', 0, 0, 34523, 'Rajesh Traders', 'kiran', 'Approved'),
        createData('G3456', 923857, 17, 34523, 'Rajesh Traders', 'kiran', 'Approved'),

    ];
    const searchFunction = () => {
        console.log(broker, "broker")
    }

    return (
        <>
            <BaseTemplate name={"PurchaseOrders"} setBroker={setBroker} broker={broker} supplier={supplier} setSupplier={setSupplier} searchFunction={searchFunction} />
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
                                    {row.OfferID}
                                </TableCell>
                                <TableCell align="right">{row.PONum}</TableCell>
                                <TableCell align="right">
                                    <Invoice date={row.PODate}/>
                                </TableCell>
                                <TableCell align="right">{row.supplierId}</TableCell>
                                <TableCell align="right">{row.supplierName}</TableCell>
                                <TableCell align="right">{row.broker}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default PurchaseOrders;