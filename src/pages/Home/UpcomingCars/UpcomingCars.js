import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import upcoming1 from '../../../images/upcoming1.jpg'
import upcoming2 from '../../../images/upcoming2.jpg'
import upcoming3 from '../../../images/upcoming3.jpg'
import React from 'react';

const UpcomingCars = () => {
    return (
        <div>

            <Typography sx={{ fontWeight: "900", my: 3 }} variant="h2">Upcoming Cars Model</Typography>

            <Grid container spacing={2} sx={{ py: 5 }}>
                <Grid sx={{ alignItems: 'center' }} item xs={12} md={4}>
                    <Card variant="outlined" >
                        <CardMedia
                            component="img"
                            width="100%"
                            height="250px"
                            image={upcoming1}
                            alt="Mahindra Scorpio"
                        />
                        <CardContent>

                            <Typography sx={{ color: 'blue' }} variant="h5" component="div">
                                Mahindra Scorpio
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: "error.main" }} >
                                Approximate Release year 2022
                            </Typography>
                            <Typography variant="body2">
                                Approximate Price will be between 27 lack - 35 lack
                            </Typography>

                        </CardContent>


                    </Card>

                </Grid>
                <Grid sx={{ alignItems: 'center' }} item xs={12} md={4}>
                    <Card variant="outlined" >
                        <CardMedia
                            component="img"
                            width="100%"
                            height="250px"
                            image={upcoming2}
                            alt="Mahindra XUV300"
                        />
                        <CardContent>

                            <Typography sx={{ color: 'blue' }} variant="h5" component="div">
                                Mahindra XUV300
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: "error.main" }} >
                                Approximate Release year 2022
                            </Typography>
                            <Typography variant="body2">
                                Approximate Price will be between 17 lack - 22 lack
                            </Typography>

                        </CardContent>


                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined">
                        <CardMedia
                            component="img"
                            width="100%"
                            height="250px"
                            image={upcoming3}
                            alt="Mahindra Alturas G4"
                        />
                        <CardContent>

                            <Typography sx={{ color: 'blue' }} variant="h5" component="div">
                                Mahindra Alturas G4
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: "error.main" }}>
                                Approximate Release year 2022
                            </Typography>
                            <Typography variant="body2">
                                Approximate Price will be between 40 lack - 42 lack


                            </Typography>

                        </CardContent>


                    </Card>
                </Grid>


            </Grid>

        </div>
    );
};

export default UpcomingCars;