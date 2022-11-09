import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {
    const { name, title, description, review, _id, picture } = service
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl md:my-5 p-2 md:p-5 ">
            <PhotoProvider>
                <PhotoView src={picture}>
                    <figure><img className='w-[400px] h-[300px] mx-auto p-3 rounded cursor-pointer' src={picture} alt="Album" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h1 className='text-2xl text-gray-400'>{name}</h1>
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <p className='text-gray-400'><strong>{review}</strong> people review this.</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}><button className="btn btn-secondary btn-outline px-12">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard; 