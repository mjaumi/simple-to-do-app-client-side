import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DeleteModal from './DeleteModal/DeleteModal';

const TaskTableRow = ({ task, index, refetch }) => {
    // destructuring the props
    const { _id, title, description } = task;

    // integration of react hooks
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteTask = async () => {
        const url = `http://localhost:5000/task/${_id}`;
        const deleteResult = await axios.delete(url);

        if (deleteResult.status === 200) {
            toast.success('Task Deleted Successfully!!!');
        } else {
            toast.error('Failed To Delete Task !!!');
        }
        refetch();
    }

    // rendering task table row component here
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{description.length > 30 ? `${description.slice(0, 30)}...` : description}</td>
                <td><button className='btn btn-outline btn-success btn-sm'>Complete</button></td>
                <td><label htmlFor='delete-modal' onClick={() => setShowDeleteModal(true)} className='btn btn-outline btn-error btn-sm'>Delete</label></td>
            </tr>
            {
                showDeleteModal && <DeleteModal handleDeleteTask={handleDeleteTask} />
            }
        </>
    );
};

export default TaskTableRow;