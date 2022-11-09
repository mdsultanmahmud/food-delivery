import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { name, title, description, review, _id, picture, rating,balance,time } = service
    return (
        <div>
            <div className='grid gap-6 place-items-center grid-cols-1 md:grid-cols-2'>
                <div className='w-full p-5'>
                    <img className='rounded-lg w-full' src={picture} alt={title} />
                </div>
                <div className='w-full p-5'>
                    <h2 className='font-bold text-2xl text-orange-600 uppercase my-5'>{name}</h2>
                    <h3 className='text-xl text-gray-500'>{title}</h3>
                    <p className='text-sm font-semibold my-2'><strong>{review}</strong> people review my service</p>
                    <div className='flex items-center '>
                        <p className='text-xl font-bold text-gray-500'>{rating}</p>
                        <div className="rating rating-md ml-3">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked/>
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className='text-xl text-green-600 my-3 font-semibold'>You have to pay <strong>{balance}</strong> for this food.</p>
                    <p className='text-orange-400 font-bold text-xl mb-5'>For delivered this food to your home, I need {time} minutes.</p>
                    <p className='text-sm text-gray-400'>{description}</p>
                </div>
            </div>
            <div>
                <h3>Review us</h3>
            </div>
        </div>
    );
};

export default ServiceDetails;