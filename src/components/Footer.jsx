import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='w-[100%] mt-[4rem] flex justify-between items-start bg-black h-auto p-10 lg:p-20 flex-wrap'>

            <div className='mt-[-3rem]'>
                <div className='flex items-center'>
                    <img src={Logo} alt="" className='h-[10rem]' />
                    <h1 className='text-3xl font-bold ml-[-4rem] text-white'>Post<span className='text-orangeColor'>Merica</span></h1>
                </div>
                <p className='text-[#AFAFAF] ml-8'>We are PostMerica, no subscription or <br /> hidden fees, and best shipping rates</p>
                <p className='text-[#AFAFAF] ml-8 mt-6'>© 2024 PostMerica All Right Reserved</p>

            </div>

            <div className=''>
                <p className='text-white text-lg cursor-pointer'>Menus</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>Home</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>About</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>How it works</p>
            </div>

            <div className=''>
                <p className='text-white text-lg cursor-pointer'>Services</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>Delivery</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>Shipping</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>API Docs</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>Terms & Conditions</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>Privacy Policy</p>
            </div>

            <div className=''>
            <p className='text-white text-lg cursor-pointer'>Contact</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>info@postmerica.com</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>PostMerica LLC</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>261 N UNIVERSITY DR STE 500 #1077</p>
                <p className='text-[#AFAFAF] text-lg cursor-pointer mt-2'>PLANTATION, FL 33324-2009</p>
            </div>

        </div>
    )
}

export default Footer