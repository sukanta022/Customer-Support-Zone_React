import React from 'react';
import { Calendar } from 'lucide-react';
const Ticket = ({ticket,handleProgress}) => {
    return (
        <div onClick={() => {handleProgress(ticket)}} className=' bg-[#FFFFFF] shadow p-3 space-y-3'>
            <div className='flex justify-between items-center'>
                <p className='text-[18px] '>{ticket.title}</p>
                
                <div className={`${ticket.status==="In- Progress" ? "bg-[#F8F3B9]" : "bg-[#B9F8CF]"} py-1 px-3 bg-[#B9F8CF] rounded-2xl flex justify-center items-center gap-2`}>
                    <p className={`${ticket.status==="In- Progress" ? "bg-[#FEBB0C]": "bg-[#02A53B]"} w-4 h-4 rounded-full`}></p>
                    <p> {ticket.status}</p>
                </div>
            </div>

            <p className='text-[16px] text-[#627382]'>{ticket.description}</p>

            <div className='flex justify-between items-center'>
                <div className='text-[14px] flex gap-3'>
                    <p className=' text-[#627382]'>{ticket.id}</p>
                    <p className={`${ticket.priority==="HIGH PRIORITY" && "text-[#F83044]"} ${ticket.priority==="MEDIUM PRIORITY" && "text-[#FEBB0C]"} ${ticket.priority==="LOW PRIORITY" && "text-[#02A53B]"}`}>{ticket.priority}</p>
                </div>

                <div className='text-[14px] text-[#627382] flex gap-3'>
                    <p>{ticket.customer}</p>
                    <Calendar className='w-5 h-5' />
                    <p>{ticket.createdAt}</p>
                </div>
                            
            </div>
        </div>
    );
};

export default Ticket;