import logIn from '../../../car-doctor-resources-main/assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
// import { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const Login = () => {
    // const { login } = useContext(AuthContext);
    
    const {login} = useAuth(); // useAuth is a  custom hook 

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result.user);
                const newUser = { email }


                // get access token
                axios.post('http://localhost:5000/jwt', newUser, { withCredentials: true })
                    // .then(res => {
                    //     console.log(res.data);
                    //     if (res.data) {
                    //         navigate(location?.state ? location.state : '/')
                    //     }
                    // })
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col gap-28 lg:flex-row ">
                <div className=" w-1/2 ">
                    <img src={logIn} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-2xl text-center mb-8 font-bold">Sign in</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-lg dark:text-gray-600">Sign in with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 text-3xl rounded-sm">
                            <FcGoogle />
                        </button>

                        <button aria-label="Log in with GitHub" className="p-3 text-2xl rounded-sm">
                            <BsGithub />
                        </button>
                    </div>
                    <p className="text-sm pb-9 pt-6 text-center sm:px-6 dark:text-gray-600">Do not have an account?
                        <Link rel="noopener noreferrer" to='/register' className="underline font-bold text-[#FF3811] dark:text-gray-800">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;