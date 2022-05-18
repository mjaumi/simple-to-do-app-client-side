import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // integration of react hooks here
    const navigate = useNavigate();

    // rendering home component here
    return (
        <section className='h-screen flex justify-center items-center'>
            <div>
                <h2 className='text-6xl'>Welcome TO <br /> <span className='font-thin text-green-500'>TO-DO App</span></h2>
                <button onClick={() => navigate('/todo')} className='btn mt-20'>Get Started <ChevronDoubleRightIcon className="h-5 w-5 ml-2" /></button>
            </div>
        </section>
    );
};

export default Home;