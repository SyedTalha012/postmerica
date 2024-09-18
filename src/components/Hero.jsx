import React from 'react'
import HeroBg from '../assets/hero_bg.svg'
const Hero = () => {
  return (

    <div style={{backgroundImage:`url(${HeroBg})`}} className='px-[1rem] lg:px-[5rem] h-fit lg:h-[90vh] py-[5rem] bg-no-repeat bg-cover'>
        <button className='bg-orangeColor text-white min-h-[2rem] px-3 rounded-md tex-sm'>SMALL ENOUGH TO CARE, BIG ENOUGH TO SUPPLY</button>
        <h1 className='mt-8 text-[4rem] font-bold leading-[4rem]'>The Best Way to Ship: <br />Save Up to 94%</h1>
        <p className='mt-7 w-[100%] lg:w-[40%] text-lg'>Enjoy peace of mind with shipping rates up to 94% off from leading carriers like USPS. NullShip helps merchants cut costs, streamline label printing, and reduce the time spent on shipping, making your logistics process more efficient than ever.</p>
        <button className='bg-[#0A1B3C] text-white w-[10rem] h-[3rem] rounded-xl text-lg font-semibold mt-8'>Register Now</button>
        <p className='mt-4 text-lg'>POST OFFICES</p>
    </div>
  )
}

export default Hero