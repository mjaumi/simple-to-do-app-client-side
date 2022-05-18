import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    // integration of react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // integration of react hooks
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {

        await signInWithGoogle();
    }

    if (loading) {
        return <Loading />
    }

    if (user) {
        toast.success('Logged In Successfully!!!');
        navigate('/');
    }


    // rendering social login component here
    return (
        <div className='w-3/5 mx-auto'>
            <button onClick={handleLoginWithGoogle} className='w-full btn btn-outline btn-info'>Log In with google</button>
            <div>
                {
                    error && <p className='text-red-500 mt-2'>Failed To Log In With Google.</p>
                }
            </div>
        </div>
    );
};

export default SocialLogin;