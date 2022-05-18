import React from 'react';
import { TrashIcon, XCircleIcon } from '@heroicons/react/outline';

const DeleteModal = ({ handleDeleteTask }) => {

    // rendering delete modal component here
    return (
        <div>
            <input type='checkbox' id='delete-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <label htmlFor='delete-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='font-bold text-lg'>Are You Sure!</h3>
                    <p className='py-4'>Are you sure you want to delete this task?</p>
                    <div className='modal-action'>
                        <label htmlFor='delete-modal' className='btn btn-outline'>
                            <XCircleIcon className="h-5 w-5 mr-2" />
                            Close
                        </label>
                        <button onClick={() => handleDeleteTask()} className='btn btn-error btn-outline'>
                            <TrashIcon className="h-5 w-5 mr-2" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;