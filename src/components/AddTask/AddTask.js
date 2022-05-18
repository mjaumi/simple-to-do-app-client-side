import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddTask = () => {

    // event handler for submitting add new task form
    const handleTask = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const description = event.target.description.value;

        const task = {
            title: title,
            description: description,
            completed: false
        }

        const result = await axios.post('http://localhost:5000/task', task);

        if (result.status === 200) {
            toast.success('Task Added Successfully!!!');
        } else {
            toast.error('Failed To Add The Task!!!');
        }

        event.target.reset();
    }

    // rendering add new task form here
    return (
        <div>
            <h3 className='md:text-left text-3xl font-semibold'>Add A New Task</h3>
            <div className='md:w-[90%] mx-auto border border-[#a6adba] p-5 mt-10 rounded-2xl bg-base-200'>
                <form onSubmit={handleTask}>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Task Title</span>
                        </label>
                        <input name='title' type='text' placeholder='Task Title Here' className='input input-bordered w-full' required />
                        <label className='label'>
                            <span className='label-text-alt'>Alt label</span>
                        </label>
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Task Description</span>
                        </label>
                        <textarea name='description' className='textarea textarea-bordered h-32' placeholder='Task Description Here...' required></textarea>
                        <label className='label'>
                            <span className='label-text-alt'>Your bio</span>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-outline btn-info mt-5'>Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;