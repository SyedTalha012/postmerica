import React from 'react'
import Logo from '../assets/logo.png'
import Bg from '../assets/news_letter.svg'
const Newsletter = () => {
    return (
        <div className='lg:px-[5rem] px-[1rem] py-[3rem] lg:py-[5rem] flex justify-center items-center '>

            <div style={{backgroundImage:`url(${Bg})`}} className='bg-[#0E0E0E] flex justify-center items-center flex-col rounded-2xl w-[100%] lg:w-[80%] py-4'>
                <div className='flex items-center gap-x-0 -ml-10'>
                    <img src={Logo} alt="" className='h-[10rem]' />
                    <h1 className='text-3xl font-bold ml-[-4rem] text-white'>Post<span className='text-orangeColor'>Merica</span></h1>
                </div>
                <h1 className='lg:text-[3rem] font-bold text-white'>Subscribe To Our Newsletters</h1>
                <p className='text-white mt-3 text-center'>We not only ship fast, but also provide the most affordable <br /> rates within your budget.</p>

                <div className='flex justify-between items-center gap-x-4 bg-white w-[97%] lg:w-[50%] rounded-2xl h-[3rem] lg:h-[4rem] mt-5 mb-8'>
                    <input type="text" placeholder='Enter Your mail' className='bg-transparent outline-none border-none px-3 flex-1' />
                    <button className='bg-[#0E0E0E] text-white w-[8rem] lg:w-[10rem] h-[2.5rem] lg:h-[3.5rem] rounded-xl lg:text-lg font-semibold mr-3'>Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default Newsletter