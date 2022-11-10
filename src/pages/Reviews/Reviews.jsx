import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import DisplayReview from './DisplayReview';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)
    const { user } = useContext(AuthContext)

    const handleDeleteReview = (id) => {
        const agreed = prompt('For deleting this review, please write CONFIRM');
        if (agreed === 'CONFIRM') {
            fetch(`https://food-delivery-server-mu.vercel.app/reviewWithGmail/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Your Reviews delete from the database!')
                        setDeleteStatus(!deleteStatus)
                    }
                })
        }

    }
    useEffect(() => {
        fetch(`https://food-delivery-server-mu.vercel.app/reviewWithGmail?email=${user?.email}`,{
            headers:{
                authAccessToken: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [deleteStatus])
    return (
        <div>
            <Helmet>
                <title>Fast Delivery - My Review</title>
            </Helmet>
            {
                reviews.length > 0 ?
                    <h3 className='text-center my-5 text-2xl font-bold text-orange-700'>Your all Reviews</h3>
                    :
                    <h3 className='text-center my-5 text-2xl font-bold text-orange-700'>No review were added</h3>
            }

            <div className='w-3/4 mx-auto'>
                {
                    reviews.map(rev => <DisplayReview
                        key={rev._id}
                        singleRev={rev}
                        handleDeleteReview={handleDeleteReview}
                    ></DisplayReview>)
                }

            </div>
        </div>
    );
};

export default Reviews;