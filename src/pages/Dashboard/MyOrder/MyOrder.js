import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://enigmatic-shelf-59046.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: "300px" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Account</TableCell>
                        <TableCell >Address</TableCell>
                        <TableCell >Car Model</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow
                            key={order._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {order.name}
                            </TableCell>
                            <TableCell >{order.email}</TableCell>
                            <TableCell >{order.address}</TableCell>
                            <TableCell >{order.model}</TableCell>
                            <TableCell >{order.phone}</TableCell>
                            <TableCell >{order.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyOrder;