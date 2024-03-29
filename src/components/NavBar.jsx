import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Logo from '../assets/franticLogoV3_purple.png'
import Image from 'next/image'

export default function NavBar() {
    return (
        <div className='py-5 sticky'>
            <div className='flex justify-between px-5 mx-56 h-16 bg-slate-300  opacity-80 rounded-3xl items-center '>
                <div className='mx-5'>
                    <Image src={Logo} width={50} height={50} alt="Picture of the author"/>
                </div>
                <div className='flex justify-between space-x-12 items-center text-xl font-medium text-black'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='mx-3'>
                    <ConnectButton/>
                </div>
            </div>
        </div>
    );
}
