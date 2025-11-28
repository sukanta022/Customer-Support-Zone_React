import React, { use } from 'react';
import State from './State';
import Ticket from './Ticket';

const TicketContainer = ({ticketPromise}) => {
    const allTickets = use(ticketPromise)
    
    return (
        <div>
            <State></State>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className='lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        allTickets.map(ticket => <Ticket ticket={ticket}></Ticket>)
                    }
                </div>

                <div className='lg:col-span-4 space-y-5 '>
                    dfuh
                </div>
            </section>
        </div>
    );
};

export default TicketContainer;