import React from 'react';
import AddTask from '../AddTask/AddTask';

const Todo = () => {

    // rendering todo component here
    return (
        <section className='w-[90%] md:w-4/5 mx-auto mt-20'>
            <AddTask />
        </section>
    );
};

export default Todo;