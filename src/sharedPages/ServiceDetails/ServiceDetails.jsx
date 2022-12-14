import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ReviewForm from './ReviewForm';
import ShowReview from './showReview';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceDetails = () => {
    const [serviceReview, setServiceReview] = useState([])
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { name, title, description, review, _id, picture, rating, balance, time } = service

    useEffect(() => {
        fetch(`https://food-delivery-server-mu.vercel.app/reviewWithId/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServiceReview(data)

            })
    }, [])
    return (
        <div>
            <div className='grid gap-6 place-items-center grid-cols-1 md:grid-cols-2 my-5'>
                <div className='w-full p-5'>
                    <PhotoProvider>
                        <PhotoView src={picture}>
                        <img className='rounded-lg w-full' src={picture} alt={title} />
                        </PhotoView>
                    </PhotoProvider>
                    
                </div>
                <div className='w-full p-5'>
                    <h2 className='font-bold text-2xl text-orange-600 uppercase my-5'>{name}</h2>
                    <h3 className='text-xl text-gray-500'>{title}</h3>
                    <p className='text-sm font-semibold my-2'><strong>{review}</strong> people review my service</p>
                    <div className='flex items-center '>
                        <p className='text-xl font-bold text-gray-500'>{rating}</p>
                        <div className="rating rating-md ml-3">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <p className='text-xl text-green-600 my-3 font-semibold'>You have to pay <strong>{balance}</strong> for this food.</p>
                    <p className='text-orange-400 font-bold text-xl mb-5'>For delivered this food to your home, I need {time} minutes.</p>
                    <p className='text-sm text-gray-400'>{description}</p>
                </div>
            </div>
            <div className='my-3'>
                <h3 className='text-center text-orange-600 text-2xl font-bold'>All review about this foods</h3>
                <div className='w-full md:w-3/4 mx-auto p-5 my-10'>
                    <div>
                        {
                            serviceReview.length > 0 ?

                                serviceReview.map(srv => <ShowReview
                                    key={srv._id}
                                    servRev={srv}
                                ></ShowReview>)
                                :
                                <p className='text-sm font-semibold text-gray-500'>No review added about this product.</p>
                        }
                    </div>
                    <div className='my-10'>
                        {
                            user?.email ?
                                <ReviewForm key={_id} service={service}></ReviewForm>
                                :
                                <p className='text-gray-600 text-xl font-semibold'>Please <Link className='mx-3 text-red-700 font-bold underline' to='/login'>login </Link> for add review about this product</p>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;