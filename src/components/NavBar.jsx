import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from '../assets/franticLogoV3_purple.png';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='py-5 sticky flex justify-center'>
                <div className='flex justify-between w-[90%] max-w-[1280px] h-16 bg-slate-300 opacity-80 rounded-lg items-center relative'>
                    <div className='mx-5'>
                        <Image src={Logo} width={50} height={50} alt="Logo"/>
                    </div>
                    <div className='hidden md:flex justify-between space-x-12 items-center text-xl font-medium text-black'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='hidden md:flex justify-between space-x-4 items-center text-xl font-medium text-black'>
                        <Button variant="outline">Login</Button>
                        <Button variant="outline">Sign up</Button>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-xl font-medium text-black'>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden flex  bg-slate-300 opacity-80 rounded-lg items-center w-[80%] h-[100%] `}>
                    
                </div>                                     
            </div>
        </div>
    );
}
