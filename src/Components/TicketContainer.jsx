import React, { use } from 'react';
import State from './State';

const TicketContainer = ({ticketPromise}) => {
    const allTickets = use(ticketPromise)
    console.log(allTickets)
    return (
        <div>
            <State></State>
        </div>
    );
};

export default TicketContainer;