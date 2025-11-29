import React, { use, useState } from 'react';
import State from './State';
import Ticket from './Ticket';
import TaskStatus from './TaskStatus';
import ResolveCard from './ResolveCard';

const TicketContainer = ({ticketPromise}) => {
    const allTickets = use(ticketPromise)
    const [progress, setProgress] = useState(0)
    const [progressStore, setProgressStore] = useState([])
    const [resolveStore, setresolveStore] = useState([])
    const [tickets, setTickets] = useState(allTickets)

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
    
    const handleResolve = (task) => {
        setresolveStore([...resolveStore,task])
        const newArray = progressStore.filter(t => t.id !== task.id)
        setProgressStore(newArray)
        const newArray2 = tickets.filter(t => t.id !== task.id)
        setTickets(newArray2)
    }

    return (
        <div>
            <State 
                progress={progress}
                resolveCounter={resolveStore.length}>
            </State>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className='lg:col-span-8 space-y-3'>
                    <h2 className='text-4xl font-bold text-[#34485A]'>Current Order</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            tickets.map(ticket => 
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
                            progressStore.length === 0 &&(
                                <div className='flex flex-col text-center py-15'>
                                    <p className='text-gray-500'>No tasks in progress</p>
                                    <p className='text-gray-400'>click on ticket to start working</p>
                                </div>
                            )
                        }
                        {
                            progressStore.map(task => 
                            <TaskStatus 
                                key={progress.id}
                                task={task}
                                handleResolve={handleResolve}>

                            </TaskStatus>)
                        }
                    </div>
                    {
                        resolveStore.length !== 0 && (
                            <div className='w-full bg-white mt-5 p-4 space-y-3'>
                                 <h2 className='text-4xl font-bold text-[#34485A]'>Resolved Task</h2>
                                 {
                                    resolveStore.map(t => <ResolveCard key={t.id} task={t}></ResolveCard>)
                                 }
                            </div>
                        )
                    }

                    
                </div>
            </section>
        </div>
    );
};

export default TicketContainer;