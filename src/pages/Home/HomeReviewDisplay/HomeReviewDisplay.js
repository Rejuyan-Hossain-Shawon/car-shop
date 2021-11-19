import { Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const HomeReviewDisplay = ({ review }) => {


    return (
        <Grid item xs={4} sm={4} md={4} >
            <Paper sx={{ textAlign: 'center', p: 3 }} variant="outlined">
                <Typography>{review.name}</Typography>
                <Typography>{review.email}</Typography>
                <Typography>Comment: {review.review}</Typography>
                <Rating name="read-only" value={parseInt(review.ratingPoint)} readOnly />

            </Paper>

        </Grid>
    );
};

export default HomeReviewDisplay;