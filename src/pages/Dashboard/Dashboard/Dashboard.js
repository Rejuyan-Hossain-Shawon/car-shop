import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import {

    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddAProduct from '../AddAProduct/AddAProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import MakeAnAdmin from './MakeAnAdmin/MakeAnAdmin';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, admin, logout } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box>
                <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link><br />
                <Link to="/"><Button color="inherit">Home</Button></Link><br />
                {
                    !admin && <Box><Link to={`${url}/payment`}><Button sx={{ mt: 1 }} color="inherit">Payment</Button></Link><br />
                        <Link to={`${url}/myorders`}><Button sx={{ mt: 1 }} color="inherit">My Orders</Button></Link><br />
                        <Link to={`${url}/review`}><Button sx={{ mt: 1 }} color="inherit">Review</Button></Link><br /></Box>
                }
                {
                    admin && <Box>
                        <Link to={`${url}/manageallorder`}><Button sx={{ mt: 1 }} color="inherit">Manage All Order</Button></Link><br />
                        <Link to={`${url}/addaproduct`}><Button sx={{ mt: 1 }} color="inherit">Add a Product</Button></Link><br />
                        <Link to={`${url}/makeanadmin`}><Button sx={{ mt: 1 }} color="inherit">Make an Admin</Button></Link><br />
                        <Link to={`${url}/manageproduct`}><Button sx={{ mt: 1 }} color="inherit">Manage Products</Button></Link><br />
                    </Box>
                }
                <Button onClick={logout} variant="contained" sx={{ my: 1 }} color="error">Logout</Button>
            </Box>

            <Divider />

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/manageallorder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addaproduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeanadmin`}>
                        <MakeAnAdmin></MakeAnAdmin>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
};

export default Dashboard;