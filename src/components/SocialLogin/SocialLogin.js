import React, { useEffect } from 'react';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.config';

const SocialLogin = ({ setShowSocialLoading }) => {
    // integration of react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [authUser] = useAuthState(auth);

    // integration of react hooks
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {

        if (user || authUser) {
            toast.success('Logged In Successfully!!!');
            navigate(from, { replace: true });
        }
    }, [authUser, user, navigate, from]);

    // event handler for log in with google
    const handleLoginWithGoogle = async () => {

        await signInWithGoogle();
        setShowSocialLoading(false);
    }

    if (loading) {
        setShowSocialLoading(true);
    }

    // rendering social login component here
    return (
        <div className='w-full md:w-3/5 mx-auto'>
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