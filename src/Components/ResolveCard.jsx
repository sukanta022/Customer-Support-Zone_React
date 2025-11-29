import React from 'react';
import { Check } from 'lucide-react';
const ResolveCard = ({task,removeResolve}) => {
    return (
        <div 
            onClick={() => {removeResolve(task)}} className='bg-green-50 space-y-2 shadow p-3 rounded-lg hover:opacity-80 cursor-pointer'>

            <p className='text-xl font-semibold'>{task.title}</p>
            <div className='flex justify-between items-center'>
                <p className='flex gap-1 text-[#02A53B]'><Check/> Completed</p>
                <p className='text-[#627382]'>Click to remove</p>
            </div>
                                    
        </div>
    );
};

export default ResolveCard;