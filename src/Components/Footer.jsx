import { Facebook, Linkedin, Mail, XIcon } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col text-center lg:text-left lg:flex-row justify-between gap-10 lg:gap-30 py-15'>
                <div className='lg:w-250 space-y-3'>
                    <h2 className='text-white font-bold text-2xl'>CS — Ticket System</h2>
                    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='lg:w-120 space-y-3'>
                    <h2 className='text-white font-bold text-2xl'>Company</h2>
                    <ul className='text-[#A1A1AA] space-y-3'>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Our Mission</a></li>
                        <li><a href='#'>Contact Saled</a></li>
                    </ul>
                </div>

                <div className='lg:w-120 space-y-3'>
                    <h2 className='text-white font-bold text-2xl'>Services</h2>
                    <ul className='text-[#A1A1AA] space-y-3'>
                        <li><a href='#'>Products & Services</a></li>
                        <li><a href='#'>Customer Stories</a></li>
                        <li><a href='#'>Download Apps</a></li>
                    </ul>
                </div>

                <div className='lg:w-120 space-y-3'>
                    <h2 className='text-white font-bold text-2xl'>Information</h2>
                    <ul className='text-[#A1A1AA] space-y-3'>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms & Conditions</a></li>
                        <li><a href='#'>Join Us</a></li>
                    </ul>
                </div>

                <div className='lg:w-180 space-y-3'>
                    <h2 className='text-white font-bold text-2xl'>Social Links</h2>
                    <ul className='text-[#A1A1AA] space-y-3 flex flex-col items-center lg:items-start'>
                        <li className='flex gap-2 text-center'><Facebook className='bg-white rounded-full text-black p-1' /><a href='#'>@CS — Ticket System</a></li>
                        <li className='flex gap-2'><Linkedin className='bg-white rounded-full p-1 text-black' /><a href='#'>@CS — Ticket System</a></li>
                        <li className='flex gap-2'><XIcon className='bg-white rounded-full p-1 text-black' /><a href='#'>@CS — Ticket System</a></li>
                        <li className='flex gap-2'><Mail className='bg-white rounded-full p-1 text-black' /><a href='#'>support@cst.com</a></li>
                    </ul>
                </div>
            </div>

            <div className='border-t-1 border-[#A1A1AA] p-5'>
                <p className='text-white text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;