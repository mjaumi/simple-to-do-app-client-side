import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import TaskTable from '../TaskTable/TaskTable';

const Todo = () => {
    // integration of react hooks here
    const [doRefetch, setDoRefetch] = useState(false);

    // rendering todo component here
    return (
        <section className='w-[90%] md:w-4/5 mx-auto mt-20'>
            <AddTask setDoRefetch={setDoRefetch} />
            <TaskTable doRefetch={doRefetch} setDoRefetch={setDoRefetch} />
        </section>
    );
};

export default Todo;