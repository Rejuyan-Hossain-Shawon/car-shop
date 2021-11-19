import { CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CarDisplay from '../../Shared/CarDisplay/CarDisplay';
import Footer from '../../Shared/Footer/Footer/Footer'

const ExploreMore = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    if (cars.length === 0) {
        return <CircularProgress />

    }

    return (
        <div>
            <Typography sx={{ fontWeight: "900", my: 3 }} variant="h4">All Cars Model</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>

                {
                    cars.map(car => <CarDisplay car={car} key={car._id}></CarDisplay>)
                }

            </Grid>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMore;