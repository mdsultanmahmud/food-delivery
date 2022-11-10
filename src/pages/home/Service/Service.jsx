import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/limitedService')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className='my-10'>
            <h3 className='text-center text-2xl font-semibold text-green-800'>Our Most Delivered Product</h3>
            <div className='w-3/4 mx-auto my-5'>
            {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service = {service}
                > </ServiceCard>)
            }   
            </div>
            <Link to='/services'><button className='btn btn-outline outline-stone-800 block mx-auto'>Show All</button></Link>
        </div>
    );
};

export default Service;