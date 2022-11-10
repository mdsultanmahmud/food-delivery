import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import SecretRecipe from '../SecretRecipe/SecretRecipe';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <SecretRecipe></SecretRecipe>
            <About></About>
        </div>
    );
};

export default Home;