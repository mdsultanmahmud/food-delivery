import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const ReviewForm = ({service}) => {
    const { name, _id, picture, balance,title } = service
    const {user} = useContext(AuthContext)
    const handleAddReview = event =>{
        const today = new Date() 
        event.preventDefault()
        const form = event.target 
        const review = {
            userName: form.name.value,
            reviewMsg: form.reviewMsg.value,
            reviewrImg: user.photoURL,
            email: user.email,
            serviceName: name,
            price: balance, 
            serviceId: _id,
            serviceImg: picture,
            serviceTitle: title,
            reviewtime: {
                date: today.toLocaleDateString(),
                time: today.toLocaleTimeString()
            }
        }
        
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Your review added!')
                form.reset()
            }
        })
    }
    return (
        <div>
            <h2 className='text-xl font-semibold text-gray-400'>Please write your review</h2>
            <form onSubmit={handleAddReview} className='w-full md:w-3/4 mx-auto text-center'>
                <input required name='name' type="text" placeholder="Your Name" className="input w-3/4 my-5 border-1 border-red-800 focus:border-green-400" />
                <br />
                <textarea name='reviewMsg' required className="textarea textarea-bordered w-3/4  my-5 border-1 border-red-800 focus:border-green-400" placeholder="Write your review"></textarea>
                <br />
            <button  className='bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-300 hover:to-red-500 px-6 py-3 rounded hover:text-white cursor-pointer'>Add Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;