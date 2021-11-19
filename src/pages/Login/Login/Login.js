
import { Alert, Button } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const { authError, loginUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{ fontWeight: 800, fontSize: '40px' }}>Login</h3>
                <label style={{ fontSize: '20px', fontWeight: 400 }}> Your Email: </label>
                <input style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }}  {...register("email")} />
                <br />

                <label style={{ fontSize: '20px', fontWeight: 400 }}>Password: </label>

                <input type='password' style={{ width: '30%', lineHeight: "20px", margin: "10px 0px" }} {...register("password", { required: true })} />
                <br />
                {errors.password && <span>This field is required</span>}
                <br />
                <NavLink to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                <br />

                <input value="Login" style={{ fontWeight: 600, fontSize: '20px', padding: "5px 20px" }} type="submit" />
                {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <Button onClick={() => signInWithGoogle(location, history)} sx={{ px: 2, color: 'warning.main', fontWeight: 600, my: 2 }} variant="outlined">Google SignIn</Button>
        </>
    );
};

export default Login;