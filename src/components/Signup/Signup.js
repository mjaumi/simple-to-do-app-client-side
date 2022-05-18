import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Loading from '../Loading/Loading';

const Signup = () => {
    // integration of react firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // integration of react hooks
    const navigate = useNavigate();

    // event handler for sign up with email and password
    const handleSignup = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        navigate('/');
    }

    // rendering sign up component here
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <div className='md:w-2/5 border border-[#a6adba] p-5 mt-10 rounded-2xl bg-base-200'>
                <h3 className='text-3xl font-semibold'>Sign Up</h3>
                <div>
                    <form onSubmit={handleSignup}>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>User Name</span>
                            </label>
                            <input name='name' type='text' placeholder='Your Name Here' className='input input-bordered w-full' required />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Email</span>
                            </label>
                            <input name='email' type='email' placeholder='Your Email Here' className='input input-bordered w-full' required />
                        </div>
                        <div className='form-control w-full mt-3'>
                            <label className='label'>
                                <span className='label-text'>Password</span>
                            </label>
                            <input name='password' type='password' placeholder='Your Password Here' className='input input-bordered w-full' required />
                        </div>
                        <div>
                            {
                                (error || updateError) && <p className='text-red-500 mt-2'>Failed To Create User.</p>
                            }
                        </div>
                        <button className='btn btn-outline btn-info mt-5'>Sign up</button>
                    </form>
                    <div className='mb-5 mt-3'>
                        <p><small>Already have an account? <Link to='/login' className='text-success underline hover:opacity-50 duration-300'>Log In Now!</Link></small></p>
                    </div>
                    <div class="divider">OR</div>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Signup;