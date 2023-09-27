import React from 'react'
import BaseTemplate from './BaseTemplate'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function DeliveryChanges() {
    const [broker, setBroker] = React.useState('');
    const [supplier, setSupplier] = React.useState('');
    const [status, setStatus] = React.useState(0);

    const searchFunction = () => {
        console.log(supplier, "supplier")
    }
    function createData(name, calories, fat, carbs, protein, food, food1, food2, food3, food4, food5, food6, food7, food8) {
        return { name, calories, fat, carbs, protein, food, food1, food2, food3, food4, food5, food6, food7, food8 };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 22, 'ajith', 'as', 1, 2, 3, 4),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'ajith', 'as', 1, 2, 3, 4, 5),
        createData('Eclair', 262, 16.0, 24, 6.0, 'ajith', 'as', 1, 2, 3, 4, 5),
        createData('Cupcake', 305, 3.7, 67, 4.3, 'ajith', 'as', 1, 2, 3, 4, 5),
        createData('Gingerbread', 356, 16.0, 49, 3.9, 'ajith', 'as', 1, 2, 3, 4, 5),
    ];

    return (
        <>
            <BaseTemplate name={"DeliveryChanges"} setSupplier={setSupplier} supplier={supplier} broker={broker} setBroker={setBroker} setStatus={setStatus} status={status} searchFunction={searchFunction} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Offer II</TableCell>
                            <TableCell align="right">PO Number</TableCell>
                            <TableCell align="right">Truck No</TableCell>
                            <TableCell align="right">Invoice No</TableCell>
                            <TableCell align="right">PO Date</TableCell>
                            <TableCell align="right">Supplier II</TableCell>
                            <TableCell align="right">Suplier Nam</TableCell>
                            <TableCell align="right">Broker Nam</TableCell>
                            <TableCell align="right">Delivery Sch Do</TableCell>
                            <TableCell align="right">Qc Status</TableCell>
                            <TableCell align="right">Rebate (INF)</TableCell>
                            <TableCell align="right">Actions</TableCell>


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
                                <TableCell align="right">{row.food2}</TableCell>
                                <TableCell align="right">{row.food3}</TableCell>
                                <TableCell align="right">{row.food4}</TableCell>
                                <TableCell align="right">{row.food5}</TableCell>
                                <TableCell align="right">{row.food6}</TableCell>
                                <TableCell align="right">{row.food7}</TableCell>
                                <TableCell align="right">{row.food8}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default DeliveryChanges