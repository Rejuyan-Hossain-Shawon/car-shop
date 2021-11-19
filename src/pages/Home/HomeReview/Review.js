import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div>
            <Typography sx={{ fontWeight: "900", my: 3 }} variant="h4">Our Reviews</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>

                {/* {
                    cars.map(car => <CarDisplay car={car} key={car._id}></CarDisplay>)
                } */}

            </Grid>
        </div>
    );
};

export default Review;