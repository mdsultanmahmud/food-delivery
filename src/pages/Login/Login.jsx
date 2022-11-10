import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
const Login = () => {
    const { LoginUser } = useContext(AuthContext)
    const [status, setStatus] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handleUserLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        LoginUser(email, password)
            .then(res => {
                const user = res.user

                if (user) {
                    toast.success('Login successfully!')

                    const currentUser = {
                        email: user.email
                    }
                    console.log(user)
                    getJWTToken(currentUser)
                    form.reset()
                    navigate(from, { replace: true })
                }
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }

    // get jwt token 
    const getJWTToken = (crrUser) => {
        fetch('https://food-delivery-server-mu.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(crrUser)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('access_token', data.token)
                console.log(data)
            })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-10 shadow-2xl rounded-3xl '>
            <Helmet>
                <title>Fast Delivery - Login</title>
            </Helmet>
            <div className='p-5 grid place-items-center'>
                <div>
                    <h2 className='text-center my-5 text-green-700 font-bold text-2xl'>Please Sign In</h2>
                    <form onSubmit={handleUserLogin} className='w-[250px] md:w-[300px]'>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faEnvelope}></FontAwesomeIcon>
                            <input required name='email' type="email" placeholder="Email" className="input bg-gray-100  w-full max-w-xs pl-12" />
                        </div>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faLock}></FontAwesomeIcon>
                            <input required name='password' type={status ? 'text' : 'password'} placeholder="Password" className="input bg-gray-100  w-full max-w-xs pl-12" />
                            {
                                status ?
                                    <FontAwesomeIcon onClick={() => setStatus(!status)} className='absolute top-1/3 right-5 w-5 h-5 text-gray-400 ml-3 cursor-pointer' icon={faEye}></FontAwesomeIcon>
                                    :
                                    <FontAwesomeIcon onClick={() => setStatus(!status)} className='absolute top-1/3 right-5 w-5 h-5 text-gray-400 ml-3 cursor-pointer' icon={faEyeSlash}></FontAwesomeIcon>
                            }

                        </div>
                        <button className='block mx-auto my-5 px-12 py-4 rounded bg-green-700 hover:bg-black hover:text-green-700 cursor-pointer font-bold text-xl text-white'>Sign In</button>
                    </form>
                </div>
            </div>
            <div className='p-5 bg-gradient-to-r from-pink-700 to-green-500 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none grid place-items-center'>
                <div>
                    <h2 className='text-3xl my-2 text-white font-bold '>Welcome to Our Website!</h2>
                    <p className='text-sm text-gray-300 my-2'>If you are first time at this website<br /> please create an account</p>
                    <Link to='/register'><button className='block mx-auto text-2xl my-4 py-3 px-10 rounded-2xl text-gray-300 border border-gray-300'>Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;