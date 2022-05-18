import React from 'react';

const TaskTableRow = ({ task, index }) => {
    // destructuring the props
    const { title, description } = task;

    // rendering task table row component here
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{description.length > 30 ? `${description.slice(0, 30)}...` : description}</td>
            <td><button className='btn btn-outline btn-success btn-sm'>Complete</button></td>
            <td><button className='btn btn-outline btn-error btn-sm'>Delete</button></td>
        </tr>
    );
};

export default TaskTableRow;