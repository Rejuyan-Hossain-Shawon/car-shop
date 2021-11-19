import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CarDisplay from '../../Shared/CarDisplay/CarDisplay';

const HomeCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => {
                const shortedData = data.slice(0, 6)

                setCars(shortedData);
            })
    }, [])

    return (
        <div>
            <Typography color="darkred" sx={{ fontWeight: "900", my: 3 }} variant="h3">Choose Your Car. Dreams Comes True!!!</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>

                {
                    cars.map(car => <CarDisplay car={car} key={car._id}></CarDisplay>)
                }

            </Grid>



        </div>
    );
};

export default HomeCars;