import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const savedReview = useLoaderData()
    const { reviewMsg,email,price,reviewrImg,serviceId,serviceImg,serviceName,serviceTitle,reviewtime } = savedReview
    // const [updateReview, setUpdateReview] = useState(savedReview)
    const handleUpdate = event =>{
        const day = new Date()
        event.preventDefault()
        const form = event.target 
        const updateText = form.updateText.value 
        const review = {
            email,
            price,
            reviewrImg,
            serviceId,
            serviceImg,
            serviceName,
            serviceTitle,
            sortingTime: day.getTime(),
            reviewMsg: updateText,
            reviewtime:{
                date: day.toLocaleDateString(),
                time: day.toLocaleTimeString()
            }
        }
        fetch(`https://food-delivery-server-mu.vercel.app/reviews/${savedReview._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Review Updated Successfully!')
            }
        })
    }
    return (
        <div>
            <h3 className='text-center text-xl font-bold text-pink-700 mt-10 mb-5'>You can only update your review text</h3>
            <form onSubmit={handleUpdate} className='bg-gray-200 shadow-xl md:w-1/2 mx-auto'>
                <textarea required name='updateText' defaultValue={reviewMsg} className="textarea textarea-secondary h-24 w-full" placeholder="Your Review"></textarea>
                <button className='btn btn-outline btn-secondary px-12 my-5'>Update</button>
            </form>
        </div>
    );
};

export default UpdateReview;