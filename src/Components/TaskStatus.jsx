import React from 'react';

const TaskStatus = ({task,handleResolve}) => {
    return (
        <div className='p-3 bg-[#F5F5F5] space-y-2 shadow rounded-lg'>
            <p className='text-[#001931] text-2xl'>{task.title}</p>
            <button 
             onClick={() => handleResolve(task)}
             className='btn bg-[#02A53B] w-full text-white'>Complete</button>
        </div>
    );
};

export default TaskStatus;