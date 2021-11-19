import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';


const Navigation = () => {
    const { user, logout, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Car Shop
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore More</Button></NavLink>

                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">  <Button color="inherit">Dashboard</Button></NavLink>

                    {
                        user?.email || user?.displayName ? <Button onClick={logout} color="inherit">Log Out</Button> :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"> <Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
                <br />
                Rejuyan Hossain Shawon
            </AppBar>
        </Box>
    );
};

export default Navigation;