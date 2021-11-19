import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { Box } from '@mui/system';

const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch("https://enigmatic-shelf-59046.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)

            })
    }, [success])

    const handleDelete = (id) => {
        const validation = window.confirm("Are you about this action")
        if (validation) {
            fetch(`https://enigmatic-shelf-59046.herokuapp.com/order/${id}`, {
                method: "DELETE"


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setSuccess(true);
                    }
                })
        }

    }

    const handleStatus = (id, data) => {
        data.status = "Shifted";
        delete data._id;


        fetch(`https://enigmatic-shelf-59046.herokuapp.com/order/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)



        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }


            })

    }

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
                    {allOrder.map((order) => (
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
                            <TableCell >{order.status} <Button onClick={() => handleStatus(order._id, order)}><ThreeSixtyIcon /></Button><Button onClick={() => handleDelete(order._id)}><DeleteIcon /></Button></TableCell>
                        </TableRow>
                    ))}
                    <TableRow>

                        {
                            success && <Alert severity="success">Your Action Worked Successfully please  — check it out!</Alert>
                        }

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrder;