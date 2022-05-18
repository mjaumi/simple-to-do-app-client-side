import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';

const CompletedModal = ({ handleCompleteTask }) => {

    // rendering task completed modal here
    return (
        <div>
            <input type='checkbox' id='completed-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <label htmlFor='completed-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>✕</label>
                    <h3 className='font-bold text-lg'>Are You Sure!</h3>
                    <p className='py-4'>Are you sure this task has been completed?</p>
                    <div className='modal-action'>
                        <label htmlFor='completed-modal' className='btn btn-outline'>
                            <XCircleIcon className="h-5 w-5 mr-2" />
                            No
                        </label>
                        <button onClick={() => handleCompleteTask()} className='btn btn-success btn-outline'>
                            <CheckCircleIcon className="h-5 w-5 mr-2" />
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedModal;