import React from 'react';
import { Link } from 'react-router-dom';
const SingleService = ({ service }) => {
    const { balance, title, name, picture, review, time,_id,description } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='h-[300px]' src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-bold text-2xl capitalize">{name}</h2>
                <p>{title}</p>
                <p className='text-xl font-semibold text-gray-500'><strong className='text-green-700'>Price: </strong>{balance}</p>
                <p className='font-semibold text-sm text-red-600'>{review} peoples review this foods.</p>
                <div className='flex justify-center items-center'>
                    <p className='text-sm text-gray-500'>Delivered time: {time} min</p>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}><button className="btn btn-warning px-12 btn-outline">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;