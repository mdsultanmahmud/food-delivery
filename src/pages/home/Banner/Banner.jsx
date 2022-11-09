import React from 'react';
import banner from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${banner}")`, backgroundAttachment:'fixed' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Made by Me at Home</h1>
                        <p className="mb-5">I serve fresh and testy food. Delivery fast and discount all time. Order from me, cause it's purely made by me, all time neat and clean</p>
                        <Link to='/services'><button className="btn btn-warning btn-outline">Explore our food</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Banner;