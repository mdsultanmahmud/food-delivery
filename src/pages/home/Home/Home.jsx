import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
        </div>
    );
};

export default Home;