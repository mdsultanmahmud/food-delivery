import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';
import { faEnvelope, faLock, faUser, faImage, faEyeSlash, faEye, } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import google from '../../assets/google.png'
import github from '../../assets/github.png'
import { Helmet } from 'react-helmet';
const Register = () => {
    const { createPasswordBasedUser, userUpdated, loginWithGoogle,registerStatus,setRegisterStatus, } = useContext(AuthContext)
    const [status, setStatus] = useState(false)
    const navigate = useNavigate()
    const handleUserRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photourl = form.photourl.value
        const email = form.email.value
        const password = form.password.value
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        createPasswordBasedUser(email, password)
            .then(res => {
                const user = res.user
                userUpdated(profile)
                    .then(res => {
                        toast.success('Account created successfully!!')
                        form.reset()
                        console.log(user)
                        setRegisterStatus(!registerStatus)
                        navigate('/')
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error(err.message)
                    })

            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res)
                toast.success('You are Login successfully!')
                navigate('/')

            })
            .catch((e) => {
                console.log(e)
                toast.error(e.message)
            })
    }

    const handleGithubLogin = () => {
        toast('Github login implement pending...')
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-5 shadow-2xl rounded-3xl'>
            <Helmet>
                <title>Fast Delivery - Register</title>
            </Helmet>
            <div className='p-5 bg-gradient-to-r from-green-700 to-pink-500 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none grid place-items-center'>
                <div>
                    <h2 className='text-3xl my-2 text-white font-bold '>Welcome Back!</h2>
                    <p className='text-sm text-gray-300 my-2'>To keep connected with us please login <br /> with your personal info</p>
                    <Link to='/login'><button className='block mx-auto text-2xl my-4 py-3 px-10 rounded-2xl text-gray-300 border border-gray-300'>Sign In</button></Link>
                </div>
            </div>
            <div className='p-5 grid place-items-center'>
                <div>
                    <h2 className='text-center my-5 text-green-700 font-bold text-2xl'>Create Account</h2>
                    <div className='my-3 flex justify-center items-center'>
                        <img onClick={handleGoogleLogin} className='w-8 h-8 rounded-full mx-2 cursor-pointer hover:scale-110' src={google} alt="" />
                        <img onClick={handleGithubLogin} className='w-8 h-8 rounded-full mx-2 cursor-pointer hover:scale-110' src={github} alt="" />
                    </div>
                    <hr />
                    <form onSubmit={handleUserRegister} className='mt-5 w-[250px] md:w-[300px]'>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faUser}></FontAwesomeIcon>
                            <input required name='name' type="text" placeholder="Name" className="input bg-gray-100  w-full max-w-xs pl-12" />
                        </div>
                        <div className="form-control relative mb-3">
                            <FontAwesomeIcon className='absolute top-1/3 left-2 w-5 h-5 text-gray-400 ml-3' icon={faImage}></FontAwesomeIcon>
                            <input required name='photourl' type="text" placeholder="Photo URL" className="input bg-gray-100  w-full max-w-xs pl-12" />
                        </div>
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
                        <button className='block mx-auto my-5 px-12 py-4 rounded bg-green-700 hover:bg-black hover:text-green-700 cursor-pointer font-bold text-xl text-white'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;