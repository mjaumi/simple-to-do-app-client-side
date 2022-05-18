import React from 'react';

const Home = () => {

    // rendering home component here
    return (
        <section className='h-screen flex justify-center items-center'>
            <div>
                <h2 className='text-6xl'>Welcome TO <br /> <span className='font-thin text-green-500'>TO-DO App</span></h2>
                <button className='btn mt-20'>Get Started</button>
            </div>
        </section>
    );
};

export default Home;