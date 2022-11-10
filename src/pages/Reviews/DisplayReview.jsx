import React from 'react';
import { Link } from 'react-router-dom';

const DisplayReview = ({ singleRev, handleDeleteReview }) => {
    const { serviceName, serviceImg, serviceTitle, reviewMsg, reviewtime, serviceId, _id } = singleRev

    return (
        <div className='my-5 shadow-xl bg-bage-100 p-5'>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
                <img className='w-full h-[150px] md:w-3/4 mx-auto rounded' src={serviceImg} alt="" />
                <div className='mt-3 md:mt-0'>
                    <h2 className='text-2xl font-bold text-gray-600'><strong>Food Name: </strong>{serviceName}</h2>
                    <h3 className='text-lg font-semibold text-green-700'><strong>Title:</strong> {serviceTitle}</h3>
                    <p className='text-sm text-gray-700'><strong>Review date: </strong>{reviewtime.date}</p>
                    <p className='text-sm text-gray-700'><strong>Food Id:</strong> {serviceId} <Link className='mx-3 text-red-700 hover:text-green-700 font-bold' to={`/serviceDetails/${serviceId}`}>(see this product)</Link></p>
                </div>
            </div>
            <div className='mt-5'>

                <p className='text-sm font-semibold text-gray-500'><strong>Given Review: </strong>{reviewMsg}</p>
            </div>
            <div className='text-center my-5'>
                <button onClick={() => handleDeleteReview(_id)} className='mt-3 mx-0 md:mx-3 font-bold px-12 py-2 bg-gradient-to-tr from-blue-600 to-pink-800 hover:from-green-400 hover:to-orange-700 text-white text-lg uppercase'>Delete</button>
                <Link to={`/updateReview/${_id}`}><button className='mt-3 mx-0 md:mx-3 font-bold px-12 py-2 bg-gradient-to-tr from-blue-600 to-pink-800 hover:from-green-400 hover:to-orange-700 text-white text-lg uppercase'>update</button></Link>

            </div>


        </div>

    );
};

export default DisplayReview;