import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CarDisplay = ({ car }) => {
    const { description, milage, title, price, picture, _id } = car;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ height: '550px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={picture}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ color: 'blue' }} gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "error.main" }} gutterBottom variant="h6" component="div">
                            Price:{price} Milage:{milage}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${_id}`}><Button variant="contained" size="small" color="primary">
                        Purchase
                    </Button></NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CarDisplay;