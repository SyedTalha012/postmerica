import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { navData } from '../constants/navData'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showResponsiveNav, setShowResponsiveNav] = useState(false)
  return (
    <div className='flex justify-between items-center shadow-xl h-[12vh] w-[100%] px-[1rem] lg:px-[5rem] relative'>

      <div className='flex items-center gap-x-0 -ml-10'>
        <img src={Logo} alt="" className='h-[10rem]' />
        <h1 className='text-3xl font-bold ml-[-4rem]'>Post<span className='text-orangeColor'>Merica</span></h1>
      </div>

      <div className='hidden gap-x-5 lg:flex'>
        {
          navData.map((i, index) => (
            <p key={index} className='text-lg font-semibold cursor-pointer'>{i.title}</p>
          ))
        }
      </div>

      <div className='hidden lg:block'>
        <button className='bg-[#0A1B3C] text-white w-[6rem] h-[3rem] rounded-xl text-lg font-semibold'>Login</button>
      </div>


      <div className='lg:hidden block cursor-pointer'>
        {!showResponsiveNav ? <GiHamburgerMenu className='text-xl' onClick={() => { setShowResponsiveNav(!showResponsiveNav) }} /> : <ImCross onClick={() => { setShowResponsiveNav(!showResponsiveNav) }} />}
      </div>

      {
        showResponsiveNav && (
          <div className='absolute left-0 right-0 top-[5rem] w-[100%] h-[20rem p-5 flex justify-center items-center flex-col bg-white border-b border-t border-[lightgray]'>
            {
              navData.map((i, index) => (
                <p key={index} className='text-lg font-semibold cursor-pointer mb-2'>{i.title}</p>
              ))
            }
            <button className='bg-[#0A1B3C] text-white w-[6rem] h-[3rem] rounded-xl text-lg font-semibold mt-3'>Login</button>

          </div>
        )
      }

    </div>
  )
}

export default Navbar