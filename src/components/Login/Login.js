import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Login = () => {
    // integration of react firebase hooks here
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // integration of react hooks
    const navigate = useNavigate();

    // event handler for log in with email and password
    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <Loading />
    }

    if (user) {
        toast.success('Logged In Successfully!!!');
        navigate('/');
    }

    // rendering log in component here
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <div className='md:w-2/5 border border-[#a6adba] p-5 mt-10 rounded-2xl bg-base-200'>
                <h3 className='text-3xl font-semibold'>Log In</h3>
                <div>
                    <form onSubmit={handleLogin}>
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
                                error && <p className='text-red-500 mt-2'>Invalid Email ID Or Password.</p>
                            }
                        </div>
                        <button className='btn btn-outline btn-info mt-5'>Log in</button>
                    </form>
                    <div className='mb-5 mt-3'>
                        <p><small>New to TO-DO App? <Link to='/signup' className='text-success underline hover:opacity-50 duration-300'>Register Now!</Link></small></p>
                    </div>
                    <div class="divider">OR</div>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;