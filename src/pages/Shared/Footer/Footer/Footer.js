import { Container, Grid, Paper } from '@mui/material';
import { border, height } from '@mui/system';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    const footerStyle = {
        backgroundColor: "gray",



    }
    return (
        <div style={footerStyle} >
            <Container>
                <Grid container spacing={2}>
                    <Grid sx={{ alignItems: 'center' }} item xs={12} md={6}>
                        <Card variant="outlined" sx={{ border: 0, backgroundColor: "transparent", }}>
                            <CardContent>

                                <Typography sx={{ color: 'white' }} variant="h5" component="div">
                                    Social Activity
                                </Typography>
                                <Typography sx={{ mb: 1.5, color: 'white' }} >
                                    Connect With Us
                                </Typography>
                                <Typography variant="body2">
                                    <FacebookIcon fontSize="large"></FacebookIcon>
                                    <GoogleIcon fontSize="large"></GoogleIcon>
                                    <YouTubeIcon fontSize="large"></YouTubeIcon>
                                    <InstagramIcon fontSize="large"></InstagramIcon>
                                    <TwitterIcon fontSize="large"></TwitterIcon>
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
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    copyright@Rejuyan Hossain Shawon
                </Typography>
            </Container>
        </div>
    );
};

export default Footer;