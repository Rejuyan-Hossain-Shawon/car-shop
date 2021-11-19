import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageProduct = () => {
    const [cars, setCars] = useState([]);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        fetch("https://enigmatic-shelf-59046.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => {
                setCars(data)

            })
    }, [])

    const handleDelete = (id) => {
        const validation = window.confirm("Are you sure");
        if (validation) {
            fetch(`https://enigmatic-shelf-59046.herokuapp.com/cars/${id}`, {
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

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: "300px" }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell >Car Model</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell >Milage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {cars.map((car) => (
                        <TableRow
                            key={car._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {car.title}
                            </TableCell>

                            <TableCell >{car.price}</TableCell>
                            <TableCell >{car.milage} <Button onClick={() => handleDelete(car._id)}><DeleteIcon /></Button></TableCell>
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

export default ManageProduct;