import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Registration = () => {
    const { authError, registerUser, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {

        if (data.password1 !== data.password2) {
            alert("password not matched");
        }
        else {
            registerUser(data.email, data.password1, data.name);
            history.push("/");
            e.target.reset();
        }
    };





    return (
        <>
            <form style={{ textAlign: 'left', marginLeft: '20px' }} onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{ fontWeight: 800, fontSize: '40px' }}>Registration</h3>
                <label style={{ fontSize: '20px', fontWeight: 400 }}> Your Name: </label>
                <input style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }}  {...register("name")} />
                <br />
                <label style={{ fontSize: '20px', fontWeight: 400 }}> Your Email: </label>
                <input type="email" style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }}  {...register("email")} />
                <br />

                <label style={{ fontSize: '20px', fontWeight: 400 }}>Password: </label>

                <input type="password" style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }} {...register("password1", { required: true })} />
                <br />
                <label style={{ fontSize: '20px', fontWeight: 400 }}>Retype-Password: </label>

                <input type="password" style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }} {...register("password2", { required: true })} />
                <br />
                {errors.password && <span>This field is required</span>}
                <br />
                <NavLink to="/login"><Button variant="text">Already User? Please Login</Button></NavLink>
                <br />
                <input value="Registration" style={{ fontWeight: 600, fontSize: '20px', padding: "5px 20px" }} type="submit" />
                {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <Button onClick={() => signInWithGoogle(location, history)} sx={{ px: 2, color: 'warning.main', fontWeight: 600, my: 2 }} variant="outlined">Google SignIn</Button>
        </>
    );
};

export default Registration;