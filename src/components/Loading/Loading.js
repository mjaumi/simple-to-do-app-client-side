import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <div className='spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
                <div className='spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0 ml-8' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
                <div className='spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0 ml-8' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;