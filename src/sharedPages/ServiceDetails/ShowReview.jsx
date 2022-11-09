import React from 'react';

const ShowReview = ({ servRev }) => {
    const { reviewMsg, reviewrImg, reviewtime, userName} = servRev
    return (
        <div className='bg-gray-100 shadow-2xl my-5 p-5'>
            <div className='flex items-center'>   
                <img className='w-12 h-12 rounded-full mr-4' src={reviewrImg} alt={`img of the revier`} />
                <div>
                    <h3 className='text-2xl text-gray-500 text-bold'>{userName}</h3>
                    <p className='text-green-400 text-sm'><strong>Time:</strong> {reviewtime.time}</p>
                    <p className='text-green-400 text-sm'><strong>Date:</strong> {reviewtime.date}</p>
                </div>
            </div>
            <hr />
            <div className='ml-20 my-5'>
                <p className='text-gray-400 text-sm'><strong>Review:</strong> {reviewMsg}</p>
            </div>
        </div>
    );
};

export default ShowReview;