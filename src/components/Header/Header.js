import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-300'>
            <nav className='w-full md:w-4/5 mx-auto'>
                <div className='navbar'>
                    <div className='navbar-start'>
                        <Link to='/' className='btn btn-ghost normal-case text-xl'>TO-DO App</Link>
                    </div>
                    <div className='navbar-end'>
                        <Link to='/login' className='btn btn-success btn-outline'>Log In</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;