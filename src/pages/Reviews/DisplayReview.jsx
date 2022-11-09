import React from 'react';

const DisplayReview = ({ singleRev }) => {
    const { serviceName, serviceImg, serviceTitle, reviewMsg,reviewtime, serviceId} = singleRev
    console.log(singleRev)
    return (
        <div className='my-5 shadow-xl bg-bage-100 p-5'>
            <div className='flex'>
                <img className='w-[120px] h-[120px] rounded' src={serviceImg} alt="" />
                <div className='ml-20'>
                    <h2 className='text-2xl font-bold text-gray-600'><strong>Food Name: </strong>{serviceName}</h2>
                    <h3 className='text-lg font-semibold text-green-700'><strong>Title:</strong> {serviceTitle}</h3>
                    <p className='text-sm text-gray-700'><strong>Review date: </strong>{reviewtime.date}</p>
                    <p className='text-sm text-gray-700'><strong>Food Id:</strong> {serviceId}</p>
                </div>
            </div>
            <div className='mt-5'>

                <p className='text-sm font-semibold text-gray-500'><strong>Given Review: </strong>{reviewMsg}</p>
            </div>
            <div className='text-center my-5'>
                <button className='mx-3 font-bold px-12 py-2 bg-gradient-to-tr from-blue-600 to-pink-800 hover:from-green-400 hover:to-orange-700 text-white text-lg uppercase'>Delete</button>
                <button className='mx-3 font-bold px-12 py-2 bg-gradient-to-tr from-blue-600 to-pink-800 hover:from-green-400 hover:to-orange-700 text-white text-lg uppercase'>update</button>
            </div>
        </div>
    );
};

export default DisplayReview;