import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import DisplayReview from './DisplayReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/reviewWithGmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <h3 className='text-center my-5 text-2xl font-bold text-orange-700'>Your all Reviews</h3>
            <div className='w-3/4 mx-auto'>
                {
                    reviews.map(rev => <DisplayReview
                        key={rev._id}
                        singleRev = {rev}
                    ></DisplayReview>)
                }

            </div>
        </div>
    );
};

export default Reviews;