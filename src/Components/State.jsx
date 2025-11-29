import React from 'react';

const State = ({progress}) => {
    return (
        <div className='w-11/12 py-10 grid grid-cols-2 gap-5 mx-auto text-center bg-#F5F5F5 '>
            <div
                className="h-[250px] rounded-xl place-content-center text-white bg-cover bg-no-repeat p-6 space-y-3"
                style={{background: "linear-gradient(135deg, #4e34de 0%, #b46ff4 100%), url('/vector1.png')" }}
            >
                <p className="text-xl">In-Progress</p>
                <p className="text-6xl font-semibold">{progress}</p>
            </div>


            <div
                className="h-[250px] rounded-xl place-content-center text-white bg-cover bg-no-repeat p-6 space-y-3"
                style={{background: "linear-gradient(to right , #38ef7d, #11998e) ,url('/vector1.png')" }}
            >
                <p className="text-xl">Resolved</p>
                <p className="text-6xl font-semibold">0</p>
            </div>
        </div>
    );
};

export default State;