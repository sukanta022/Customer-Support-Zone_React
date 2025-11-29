import React from 'react';

const State = ({progress,resolveCounter}) => {
    return (
        <div className='w-11/12 py-10 grid grid-cols-2 gap-5 mx-auto text-center bg-#F5F5F5 '>
            <div
                className="h-[250px] rounded-xl place-content-center text-white bg-cover bg-no-repeat flex justify-center lg:justify-between items-center"
                style={{background: "linear-gradient(135deg, #4e34de 0%, #b46ff4 100%)"}}
            >
                <img className='h-full hidden lg:block ' src="/public/vector1.png" alt="" />
                <div className='space-y-3 text-center'>
                    <p className="text-xl">In-Progress</p>
                    <p className="text-6xl font-semibold">{progress}</p>
                </div>
                
                <img className='h-full scale-x-[-1] hidden lg:block ' src="/public/vector1.png" alt="" />
            </div>


            <div
                className="h-[250px] rounded-xl place-content-center text-white bg-cover bg-no-repeat flex justify-center lg:justify-between items-center"
                style={{background: "linear-gradient(to right , #38ef7d, #11998e)" }}
            >

                <img className='h-full hidden lg:block' src="/public/vector1.png" alt="" />
                <div className='space-y-3 text-center'>
                    <p className="text-xl">Resolved</p>
                    <p className="text-6xl font-semibold">{resolveCounter}</p>
                </div>
                
                <img className='h-full scale-x-[-1] hidden lg:block' src="/public/vector1.png" alt="" />
                
            </div>
        </div>
    );
};

export default State;