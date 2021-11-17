import { Button, Grid, Typography } from '@mui/material';
import { height, width } from '@mui/system';
import React from 'react';
import bg from '../../../images/homeBanner.jpg'

const HomeBanner = () => {
    const homeBannerStyle = {
        background: `url(${bg})`,
        marginTop: '17px',
        width: "100%",
        backgroundRepeat: "none",
        backgroundColor: '#42495C',
        opacity: 0.80,
        backgroundPosition: 'left',
        height: '600px'

    }

    return (
        <div style={homeBannerStyle}>
            <Grid container spacing={2}>
                <Grid sx={{ textAlign: "left", mt: 2, ml: 5 }} item xs={12} md={6}>
                    <Typography sx={{ my: 5, color: "DarkBlue", fontWeight: 'bold' }} variant="h2">Find Your Dream Car Here</Typography>
                    <Typography sx={{ my: 5, color: "Crimson", fontWeight: 'bold' }} variant="h2">Your Car Shop</Typography>
                    <Button sx={{ fontSize: '15px' }} variant="contained">Explore More</Button>


                </Grid>


            </Grid>
        </div>
    );
};

export default HomeBanner;