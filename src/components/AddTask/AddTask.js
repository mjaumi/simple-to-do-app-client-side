import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { PlusCircleIcon } from '@heroicons/react/outline';
import auth from '../../firebase.config';

const AddTask = ({ setDoRefetch }) => {
    // integration of react firebase hooks
    const [user] = useAuthState(auth);

    // event handler for submitting add new task form
    const handleTask = async (event) => {
        event.preventDefault();

        const email = event.target.user.value;
        const title = event.target.title.value;
        const description = event.target.description.value;

        const task = {
            user: email,
            title: title,
            description: description,
            completed: false
        }

        const result = await axios.post('https://mysterious-reaches-08632.herokuapp.com/task', task);

        if (result.status === 200) {
            toast.success('Task Added Successfully!!!');
        } else {
            toast.error('Failed To Add The Task!!!');
        }

        setDoRefetch(true);
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
                            <span className='label-text'>User</span>
                        </label>
                        <input name='user' type='text' value={user.email} className='input input-bordered w-full disabled:bg-base-300 disabled:opacity-60' required readOnly disabled />
                    </div>
                    <div className='form-control w-full mt-3'>
                        <label className='label'>
                            <span className='label-text'>Task Title</span>
                        </label>
                        <input name='title' type='text' placeholder='Task Title Here' className='input input-bordered w-full' required />
                    </div>
                    <div className='form-control mt-3'>
                        <label className='label'>
                            <span className='label-text'>Task Description</span>
                        </label>
                        <textarea name='description' className='textarea textarea-bordered h-32' placeholder='Task Description Here...' required></textarea>
                    </div>
                    <button type='submit' className='btn btn-outline btn-info mt-5'>
                        <PlusCircleIcon className="h-5 w-5 mr-2" />
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;