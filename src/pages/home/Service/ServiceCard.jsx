import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { name, title, description, review, _id,picture } = service 
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
            <figure><img className='w-[400px] h-[300px] mx-auto p-3 rounded' src={picture} alt="Album" /></figure>
            <div className="card-body">
                <h1 className='text-2xl text-gray-400'>{name}</h1>
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0,100)}...</p>
                <p className='text-gray-400'><strong>{review}</strong> people review this.</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}><button className="btn btn-primary btn-outline">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard; 