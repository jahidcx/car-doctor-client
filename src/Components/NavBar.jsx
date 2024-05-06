import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

    const { user, createLogout } = useContext(AuthContext);

    const handleLogOut = () => {
        createLogout()
        .then(()=>{
            console.log('sign out successfully');
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 font-inter">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img className='h-16' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-[#FF3811] mr-4">Appointment</button>
                {
                    user ? <> <a onClick={handleLogOut} className="btn bg-[#FF3811] text-white  font-semibold text-sm border-none">Sign Out</a> </> : <>
                        <Link to='/login' className="btn bg-[#FF3811] text-white  font-semibold text-sm border-none">Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;