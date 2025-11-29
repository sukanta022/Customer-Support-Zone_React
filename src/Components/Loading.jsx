import React from 'react';

const Loading = () => {
    return (
        <div className='w-11/12 mx-auto py-20 flex flex-col justify-center items-center'>
            <p className='text-gray-500 text-xl'>Data is loading..</p>
        
            <p><span className="loading loading-spinner loading-3xl"></span></p>
        </div>
    );
};

export default Loading;