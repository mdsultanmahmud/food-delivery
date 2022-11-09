import { faBurger, faCartPlus, faClock, faFish, faMoneyBill1Wave, faTruck, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div className='p-5'>
            <h3 className='text-center font-bold text-green-500 my-5 text-2xl'>Why Choose My Food!!</h3>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faCartPlus}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>Easy to Order</h4>
                    <p className='font-bold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faBurger}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>Best Food Quality</h4>
                    <p className='font-bold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faTruck}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>Fastest Delivery</h4>
                    <p className='font-semibold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faClock}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>Save Your Time</h4>
                    <p className='font-semibold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faUtensils}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>Neat and Clean Food</h4>
                    <p className='font-semibold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faFish}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>Fresh Food</h4>
                    <p className='font-semibold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
                <div className='text-center shadow-lg bg-white px-3 py-8 rounded transition hover:scale-110'>
                    <FontAwesomeIcon className='w-14 h-14 hover:text-orange-400' icon={faMoneyBill1Wave}></FontAwesomeIcon>
                    <h4 className='font-bold text-2xl text-orange-600'>No Additional Charge for delivery</h4>
                    <p className='font-semibold text-sm text-gray-400'>Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.</p>
                </div>
            </div>
            <div className='mt-24 mb-10 grid place-items-center'>
                <div className='w-3/4'>
                    <h3 className='text-center text-secondary font-bold text-2xl my-7'>Get Update Newsletter</h3>
                    <div className='text-center'>
                        <input type="text" placeholder="Your Email" className="input input-bordered input-secondary w-full max-w-xs " />
                        <button className='btn btn-outline btn-secondary mt-5 md:mt-0 ml-0 md:ml-5'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;