
import React from 'react';
import Button from '@mui/material/Button';
import Navigation from '../../Shared/Navigation/Navigation';
import { Container } from '@mui/material';
import HomeBanner from '../HomeBanner/HomeBanner';
import Footer from '../../Shared/Footer/Footer/Footer';
import UpcomingCars from '../UpcomingCars/UpcomingCars';
import HomeCars from '../HomeCars/HomeCars';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomeCars></HomeCars>
            <UpcomingCars></UpcomingCars>
            <Footer></Footer>
        </div>
    );
};

export default Home;