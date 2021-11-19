import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeReviewDisplay from '../HomeReviewDisplay/HomeReviewDisplay';

const HomeReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-shelf-59046.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })
    }, [])
    return (
        <div>
            <Typography sx={{ fontWeight: "900", my: 3 }} variant="h4">Our Reviews</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    reviews.map(review => <HomeReviewDisplay key={review._id} review={review}></HomeReviewDisplay>)
                }

            </Grid>
        </div>
    );
};

export default HomeReview;