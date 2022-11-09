import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext)
    const handleUserLogout = () => {
        userLogout()
            .then(res => {
                toast.success('successfully Logout!')
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }
    const allMenu = <>
        <li><Link className='font-bold text-white' to={'/services'}>Services</Link></li>
        <li><Link className='font-bold text-white' to={'/blog'}>Blog</Link></li>
        {
            user?.uid &&
            <>
                <li><Link className='font-bold text-white' to={'/reviews'}>My Review</Link></li>
                <li><Link className='font-bold text-white' to={'/addServices'}>Add Service</Link></li>
            </>
        }
        <li><Link className='font-bold text-white' to={'/register'}>Register</Link></li>

    </>
    return (
        <div className="navbar bg-gray-700 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52">
                        {allMenu}
                    </ul>
                </div>
                <Link to={'/'} className="normal-case text-xl md:text-2xl text-red-500 font-bold ">Fast <span className='text-pink-900'>Delivery</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {allMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                        <img title={user?.displayName} src={user?.photoURL} className='w-12 h-12 rounded-full mr-2' alt="" />
                            <li onClick={handleUserLogout} className='list-none mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-3 rounded hover:text-white cursor-pointer'><Link className='font-bold'>Logout</Link></li>
                        </>
                        :
                        <li className='list-none mx-2 bg-gradient-to-r from-red-400 to-blue-500 hover:from-blue-500 hover:to-yellow-500 px-6 py-3 rounded hover:text-white cursor-pointer'><Link className='font-bold' to={'/login'}>Login</Link></li>
                }


            </div>
        </div>
    );
};

export default Navbar;