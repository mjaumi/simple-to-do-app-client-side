import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CompletedModal from './CompletedModal/CompletedModal';
import DeleteModal from './DeleteModal/DeleteModal';

const TaskTableRow = ({ task, index, refetch }) => {
    // destructuring the props
    const { _id, title, description, completed } = task;

    // integration of react hooks
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showCompletedModal, setShowCompletedModal] = useState(false);

    // event handler for deleting a task from database
    const handleDeleteTask = async () => {
        const url = `http://localhost:5000/task/${_id}`;
        const deleteResult = await axios.delete(url);

        if (deleteResult.status === 200) {
            toast.success('Task Deleted Successfully!!!');
        } else {
            toast.error('Failed To Delete Task !!!');
        }
        refetch();
        setShowDeleteModal(false);
    }

    const handleCompleteTask = async () => {
        const url = `http://localhost:5000/task/${_id}`;

        const updatedComplete = {
            completed: true
        }

        const completeResult = await axios.patch(url, updatedComplete);

        if (completeResult.status === 200) {
            toast.success('Task Completed Successfully!!!');
        } else {
            toast.error('Failed To Completed Task !!!');
        }
        refetch();
        setShowCompletedModal(false);
    }

    // rendering task table row component here
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td className={`${completed && 'line-through'}`}>{title}</td>
                <td className={`${completed && 'line-through'}`}>{description.length > 30 ? `${description.slice(0, 30)}...` : description}</td>
                <td>{completed ? <p className='text-success font-semibold'>Completed!</p> : <label htmlFor='completed-modal' onClick={() => setShowCompletedModal(true)} className='btn btn-outline btn-success btn-sm'>Complete</label>}</td>
                <td><label htmlFor='delete-modal' onClick={() => setShowDeleteModal(true)} className='btn btn-outline btn-error btn-sm'>Delete</label></td>
            </tr>
            {
                showDeleteModal && <DeleteModal handleDeleteTask={handleDeleteTask} />
            }
            {
                showCompletedModal && <CompletedModal handleCompleteTask={handleCompleteTask} />
            }
        </>
    );
};

export default TaskTableRow;