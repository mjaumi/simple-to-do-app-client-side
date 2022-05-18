import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Header = () => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // event handler for log out event
    const handleLogout = () => {

        signOut(auth);
        toast.success('Logged Out Successfully!!!');
    }

    // rendering headers component here 
    return (
        <header className='bg-base-300 sticky top-0'>
            <nav className='w-full md:w-4/5 mx-auto'>
                <div className='navbar'>
                    <div className='navbar-start'>
                        <Link to='/' className='btn btn-ghost normal-case text-xl'>TO-DO App</Link>
                    </div>
                    <div className='navbar-end'>
                        {
                            user ?
                                <>
                                    <p className='mr-5 font-semibold text-lg'>{user.displayName}</p>
                                    <button onClick={handleLogout} className='btn btn-success btn-outline'>Log Out</button>
                                </>
                                :
                                <Link to='/login' className='btn btn-success btn-outline'>Log In</Link>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;