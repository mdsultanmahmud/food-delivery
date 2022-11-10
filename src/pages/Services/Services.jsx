import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData()
        
    return (
        <div>
            <Helmet>
                <title>Fast Delivery - Services</title>
            </Helmet>
            <h3 className='text-center text-2xl my-6 text-orange-600 font-bold'>Our all services</h3>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;