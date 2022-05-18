import React from 'react';

const Todo = () => {

    // rendering todo component here
    return (
        <section className='w-[90%] md:w-4/5 mx-auto mt-20'>
            <div>
                <h3 className='md:text-left text-3xl font-semibold'>Add A New Task</h3>
                <div className='md:w-[90%] mx-auto border border-[#a6adba] p-5 mt-10 rounded-2xl bg-base-200'>
                    <form>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text'>Task Title</span>
                            </label>
                            <input type='text' placeholder='Task Title Here' className='input input-bordered w-full' />
                            <label className='label'>
                                <span className='label-text-alt'>Alt label</span>
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Task Description</span>
                            </label>
                            <textarea className='textarea textarea-bordered h-32' placeholder='Task Description Here...'></textarea>
                            <label className='label'>
                                <span className='label-text-alt'>Your bio</span>
                            </label>
                        </div>
                        <button className='btn btn-outline btn-info mt-5'>Add Task</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Todo;