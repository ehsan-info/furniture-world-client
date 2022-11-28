import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <CategoryList></CategoryList>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;