import React from 'react';

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
                        <label htmlFor='completed-modal' className='btn btn-outline'>No</label>
                        <button onClick={() => handleCompleteTask()} className='btn btn-success btn-outline'>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedModal;