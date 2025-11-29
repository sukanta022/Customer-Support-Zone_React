import React, { use, useState } from 'react';
import State from './State';
import Ticket from './Ticket';
import TaskStatus from './TaskStatus';

const TicketContainer = ({ticketPromise}) => {
    const allTickets = use(ticketPromise)
    const [progress, setProgress] = useState(0)
    const [progressStore, setProgressStore] = useState([])

    const handleProgress = (ticket) => {
        const isExist = progressStore.find(t => t.id === ticket.id)
        if(isExist){
            alert("task already added")
        }
        else{
            setProgress(progress+1)
            setProgressStore([...progressStore,ticket])
        }
            
    }
    console.log(progressStore.length)
    return (
        <div>
            <State progress={progress}></State>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className='lg:col-span-8 space-y-3'>
                    <h2 className='text-4xl font-bold text-[#34485A]'>Current Order</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            allTickets.map(ticket => 
                            <Ticket 
                                key = {ticket.id}
                                ticket={ticket} 
                                handleProgress={handleProgress}>    
                            </Ticket>)
                        }
                    </div>
                    
                </div>

                <div className='lg:col-span-4'>
                    
                    <div className='shadow bg-white p-4 space-y-3'>
                        <h2 className='text-4xl font-bold text-[#34485A]'>Task Status</h2>
                        {
                            progressStore.map(task => 
                            <TaskStatus 
                                key={progress.id}
                                task={task}>

                            </TaskStatus>)
                        }
                        
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default TicketContainer;