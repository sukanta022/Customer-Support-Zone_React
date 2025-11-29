import React, { use, useState } from 'react';
import State from './State';
import Ticket from './Ticket';
import TaskStatus from './TaskStatus';
import ResolveCard from './ResolveCard';
import { toast } from 'react-toastify';

const TicketContainer = ({ticketPromise}) => {
    const allTickets = use(ticketPromise)
    const [progressStore, setProgressStore] = useState([])
    const [resolveCounter,setResolveCounter] = useState(0)
    const [resolveStore, setresolveStore] = useState([])
    const [tickets, setTickets] = useState(allTickets)

    const handleProgress = (ticket) => {
        const isExist = progressStore.find(t => t.id === ticket.id)
        if(isExist){
            
            toast.error("Already in progress")
        }
        else{
            setProgressStore([...progressStore,ticket])
            toast.success("Ticket added on progress")
        }       
    }
    
    const handleResolve = (task) => {
        setresolveStore([...resolveStore,task])
        toast.success("Task added in resolve")
        setResolveCounter(resolveCounter+1)
        const newArray = progressStore.filter(t => t.id !== task.id)
        setProgressStore(newArray)
        const newArray2 = tickets.filter(t => t.id !== task.id)
        setTickets(newArray2)
    }

    const removeResolve = (task) => {
        const newArray = resolveStore.filter(t => t.id !== task.id)
        setresolveStore(newArray)
        toast.success("Task remove from resolve")
    }

    return (
        <div>
            <State 
                progress={progressStore.length}
                resolveCounter={resolveCounter}>
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
                    
                    <div className='shadow bg-white p-4 space-y-3 rounded-lg'>
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
                                key={task.id}
                                task={task}
                                handleResolve={handleResolve}>

                            </TaskStatus>)
                        }
                    </div>
                    {
                        resolveStore.length !== 0 && (
                            <div className='w-full bg-white mt-5 p-4 space-y-3 rounded-lg'>
                                 <h2 className='text-4xl font-bold text-[#34485A]'>Resolved Task</h2>
                                 {
                                    resolveStore.map(t => 
                                        <ResolveCard 
                                            key={t.id} 
                                            task={t}
                                            removeResolve={removeResolve}>
                                        </ResolveCard>)
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