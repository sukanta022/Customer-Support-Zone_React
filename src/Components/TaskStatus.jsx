import React from 'react';

const TaskStatus = ({task}) => {
    return (
        <div className='p-3 bg-white space-y-2 shadow-lg'>
            <p className='text-[#001931] text-2xl'>{task.title}</p>
            <button className='btn bg-[#02A53B] w-full text-white'>Complete</button>
        </div>
    );
};

export default TaskStatus;