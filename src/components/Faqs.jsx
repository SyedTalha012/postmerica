import React, { useState } from 'react'
import { faqData } from '../constants/faqsData'
import { FaPlus,FaMinus } from "react-icons/fa";
import GradientBg from '../assets/gradientBg.svg'

const Faqs = () => {
    const [open,setOpen] = useState(null)
    return (
        <div style={{backgroundImage:`url(${GradientBg})`}} className='lg:px-[5rem] px-[1rem] py-[3rem] lg:py-[5rem] flex justify-center items-center flex-col '>
            <div className='flex justify-center items-center flex-col rounded-2xl w-[80%] py-4'>
                <button className='bg-orangeColor text-white h-[2rem] px-3 rounded-md tex-sm'>FREQUENTLY ASKED QUESTION</button>
                <h1 className='mt-3 text-[3rem] font-semibold'>Frequently Asked Questions</h1>
                <p>Everything you need to know about product and billing.</p>
            </div>

            {
                faqData.map((i)=>(
                    <div className='w-[100%] lg:w-[40%] bg-white shadow-xl border border-[lightgray] min-h-[3.5rem] rounded-md px-3 mb-4 flex justify-center flex-col '>
                        <div className='w-[100%] flex items-center gap-x-3 py-2'>
                            {i.id == open ? <FaMinus onClick={()=>setOpen(null)} className='cursor-pointer'/>: <FaPlus onClick={()=>setOpen(i?.id)} className='cursor-pointer'/>}
                            <p>{i.question}</p>
                        </div>
                        {
                            i.id == open && (
                                <p className=''>{i.answer}</p>
                            )
                        }
                    </div>
                ))
            }
        </div>

    )
}

export default Faqs