import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SingleService from './SingleService';
import { Dna } from 'react-loader-spinner'

const Services = () => {
    const [services, setServices] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        fetch('https://food-delivery-server-mu.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoad(false)
            })
    }, [])

    if (load) {
        return <div className='h-[500px] grid place-items-center'>
            <Dna
                visible={true}
                height="100"
                width="100"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    }
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