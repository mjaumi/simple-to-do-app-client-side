import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import TaskTableRow from '../TaskTableRow';

const TaskTable = ({ doRefetch, setDoRefetch }) => {

    // fetching all the tasks added by user using React Query
    const url = `http://localhost:5000/task?email=mjaumi2864@gmail.com`
    const { data: fetchedTasks, isLoading, refetch } = useQuery('tasks', () => axios.get(url));

    // loading spinner if the useQuery fetching
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // doing refetch here
    if (doRefetch) {
        refetch();
        setDoRefetch(false);
    }

    // rendering task table component here
    return (
        <div className='mt-24'>
            <h3 className='md:text-left text-3xl font-semibold'>My Tasks</h3>
            <div className='md:w-[90%] mx-auto border border-[#a6adba] p-5 mt-10 rounded-2xl bg-base-200'>
                <div className='overflow-x-auto'>
                    <table className='table w-full text-center'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Completed</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fetchedTasks?.data?.map((task, index) => <TaskTableRow
                                    key={task._id}
                                    index={index}
                                    refetch={refetch}
                                    task={task}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TaskTable;