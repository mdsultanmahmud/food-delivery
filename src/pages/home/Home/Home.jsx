import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../About/About';
import Banner from '../Banner/Banner';
import SecretRecipe from '../SecretRecipe/SecretRecipe';
import Service from '../Service/Service';

const Home = () => {
    return (

        <div>
            <Helmet>
                <title>Fast Delivery - Home</title>
            </Helmet>
            <Banner></Banner>
            <Service></Service>
            <SecretRecipe></SecretRecipe>
            <About></About>
        </div>
    );
};

export default Home;