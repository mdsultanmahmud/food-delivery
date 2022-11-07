import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faImage, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
const Register = () => {
    const [status, setStatus] = useState(false)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-5 shadow-2xl rounded-3xl'>
            <div className='p-5 bg-gradient-to-r from-green-700 to-pink-500 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none grid place-items-center'>
                <div>
                    <h2 className='text-3xl my-2 text-white font-bold '>Welcome Back!</h2>
                    <p className='text-sm text-gray-300 my-2'>To keep connected with us please login <br /> with your personal info</p>
                    <button className='block mx-auto text-2xl my-4 py-3 px-10 rounded-2xl text-gray-300 border border-gray-300'>Sign In</button>
                </div>
            </div>
            <div className='p-5 grid place-items-center'>
                <div>
                    <h2 className='text-center my-5 text-green-700 font-bold text-2xl'>Create Account</h2>
                    <form className='w-[300px]'>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faUser}></FontAwesomeIcon>
                            <input type="text" placeholder="Name" className="input bg-gray-100  w-full max-w-xs pl-12" />
                        </div>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faImage}></FontAwesomeIcon>
                            <input type="text" placeholder="Photo URL" className="input bg-gray-100  w-full max-w-xs pl-12" />
                        </div>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faEnvelope}></FontAwesomeIcon>
                            <input type="email" placeholder="Email" className="input bg-gray-100  w-full max-w-xs pl-12" />
                        </div>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faLock}></FontAwesomeIcon>
                            <input type={status ? 'text' : 'password'} placeholder="Password" className="input bg-gray-100  w-full max-w-xs pl-12" />
                            {
                                status ?
                                    <FontAwesomeIcon onClick={() => setStatus(!status)} className='absolute top-1/3 right-5 w-5 h-5 text-gray-400 ml-3 cursor-pointer' icon={faEyeSlash}></FontAwesomeIcon>
                                    :
                                    <FontAwesomeIcon onClick={() => setStatus(!status)} className='absolute top-1/3 right-5 w-5 h-5 text-gray-400 ml-3 cursor-pointer' icon={faEye}></FontAwesomeIcon>
                            }

                        </div>
                        <button className='block mx-auto my-5 px-12 py-4 rounded bg-green-700 hover:bg-black hover:text-green-700 cursor-pointer font-bold text-xl text-white'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;