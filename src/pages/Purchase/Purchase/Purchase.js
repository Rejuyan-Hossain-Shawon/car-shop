import { Alert, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { user, isLoading } = useAuth();

    const { _id } = useParams();
    const [car, setCar] = useState({});
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetch(`https://enigmatic-shelf-59046.herokuapp.com/cars/${_id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])
    // purhchase information

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.email = user.email;
        data.model = car.title;
        fetch("https://enigmatic-shelf-59046.herokuapp.com/orders", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset()

                }
            })
    };


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                {
                    isLoading ? <CircularProgress /> : <form onSubmit={handleSubmit(onSubmit)}>
                        <label style={{ fontSize: '20px', fontWeight: 400 }}>Name</label>
                        <input style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }}  {...register("name")} />
                        <br />
                        <label style={{ fontSize: '20px', fontWeight: 400 }}>Email</label>
                        <input style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }} defaultValue={user.email} type="email" disabled {...register("email")} />
                        <br />
                        <label style={{ fontSize: '20px', fontWeight: 400 }}>Address</label>
                        <input style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }} type="text" {...register("address")} />
                        <br />
                        <label style={{ fontSize: '20px', fontWeight: 400 }}>Phone</label>
                        <input style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }} type="tel"  {...register("phone")} />
                        <br />
                        <input type="submit" style={{ fontWeight: 600, fontSize: '20px', padding: "5px 20px" }} />
                    </form>
                }




                {success && <Alert severity="success">Your Order Placed</Alert>}
            </Grid>
            <Grid item xs={12} md={5}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={car?.picture}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{ color: 'blue' }} gutterBottom variant="h5" component="div">
                                {car?.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: "error.main" }} gutterBottom variant="h6" component="div">
                                Price:{car?.price} Milage:{car?.milage}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {car?.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                    </CardActions>
                </Card>
            </Grid>

        </Grid>
    );
};

export default Purchase;