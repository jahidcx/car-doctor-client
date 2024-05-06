import { useContext } from 'react';
import login from '../../../car-doctor-resources-main/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext); 

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,name, password);

        // create an user
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error))
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col gap-28 lg:flex-row ">
                <div className=" w-1/2 ">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-2xl text-center mb-8 font-bold">Sign up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>

                    <p className="text-sm pb-9 pt-6 text-center sm:px-6 dark:text-gray-600">Already have an account?
                        <Link rel="noopener noreferrer" to='/login' className="underline font-bold text-[#FF3811] dark:text-gray-800">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;