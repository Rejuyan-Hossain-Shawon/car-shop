import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const UpcomingCars = () => {
    return (
        <div>

            <Typography variant="h2">Upcoming Cars Model</Typography>

            <Grid container spacing={2}>
                <Grid sx={{ alignItems: 'center' }} item xs={12} md={6}>
                    <Card variant="outlined" >
                        <CardContent>

                            <Typography sx={{ color: 'blue' }} variant="h5" component="div">
                                Social Activity
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: 'white' }} >
                                Connect With Us
                            </Typography>
                            <Typography variant="body2">

                            </Typography>

                        </CardContent>


                    </Card>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" sx={{ border: 0, backgroundColor: "transparent", }}>
                        <CardContent>

                            <Typography sx={{ color: 'white' }} variant="h5" component="div">
                                Services
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: 'white' }} >
                                Trust us we always try provide our best service to our all customer
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />

                            </Typography>

                        </CardContent>


                    </Card>
                </Grid>


            </Grid>

        </div>
    );
};

export default UpcomingCars;