import React from 'react';
import { Link } from 'react-router-dom';
import secretRecipe from '../../../assets/secretmd.jpg'
const SecretRecipe = () => {
    return (
        <div className='my-10 p-10'>
            <h2 className='text-center text-bold text-2xl text-secondary my-5'>Top Secret Recipe of Food</h2>
            <div className='gap-5 bg-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-2'>
            <div className='w-full'>
                <img className='w-full rounded-lg' src={secretRecipe} alt="" />
            </div>
            <div className='w-full grid place-items-center'>
                <div className='md:ml-10'>
                <h3 className='text-gray-400 font-bold text-2xl my-3'>My Secret Recipe</h3>
                <p className='font-bold text-sm'>There are some recipes, that no matter how hard we try to replicate..</p>
               <Link to='/services'><button className='btn btn-outline btn-secondary my-5'>Explore Food</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SecretRecipe;