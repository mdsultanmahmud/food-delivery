import React from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const AddService = () => {
    const handleAddService = event => {
        const day = new Date()
        event.preventDefault()
        const form = event.target
        const addedService = {
            balance: '$' + form.price.value,
            picture: form.img.value,
            time: form.time.value,
            title: form.title.value,
            name: form.name.value,
            description: form.description.value,
            rating: form.rating.value,
            review: form.review.value,
            sortingTime: day.getTime()
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added successfully!!')
                    form.reset()
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>Fast Delivery - Add Service</title>
            </Helmet>
            <h1 className='text-center text-gray-500 font-bold text-2xl mt-5'>Add a service</h1>
            <p className='text-center text-sm font-bold text-red-700'>This is food delivery website, please add a food which made from home and serve people!</p>
            <div className='my-10shadow-lg p-5 flex justify-center items-center'>
                <form onSubmit={handleAddService} className='w-full md:w-3/4 shadow-2xl rounded bg-white p-4'>
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                        <input required name='name' type="text" placeholder="Service Name(recommended food)" className="input input-bordered input-primary w-full max-w-xs" />
                        <input required name='title' type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs" />
                        <input required name='review' type="number" placeholder="review (in number)" className="input input-bordered input-primary w-full max-w-xs" />
                        <input required step="0.01" name='rating' type="number" placeholder="rating (0-5)" className="input input-bordered input-primary w-full max-w-xs" />
                        <input required name='img' type="text" placeholder="Image URL of service" className="input input-bordered input-primary w-full max-w-xs" />
                        <input required name='price' type="number" placeholder="Price of Service(in number)" className="input input-bordered input-primary w-full max-w-xs" />
                        <input required name='time' type="number" placeholder="Time range(30-45)" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <textarea required name='description' className="textarea textarea-secondary w-full mt-5" placeholder="Service Description(minimum word 150)"></textarea>
                    <button className='btn btn-outline btn-secondary mx-auto block my-6 px-8'>Add Service</button>
                </form>
            </div>
        </div>

    );
};

export default AddService;