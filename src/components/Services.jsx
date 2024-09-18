import React from 'react'
import GradientBg from '../assets/gradientBg.svg'

const Services = () => {
    return (
        <div className='px-[1rem] lg:px-[5rem] py-[5rem]'>

            <div style={{ backgroundImage: `url(${GradientBg})` }}>
                <div className='flex justify-center items-center flex-col'>
                    <button className='bg-orangeColor text-white h-[2rem] px-3 rounded-md tex-sm'>OUR SERVICES</button>
                    <h1 className='mt-3 text-[2rem] lg:text-[3rem] font-bold'>The Fastest Platform.</h1>
                    <p className='lg:w-[40%] text-center mt-3'>We know how critical it can be for you and your business to bring the fastestand most accurate delivery of your shipments. NullShip will be your supportsystem in this pursuit</p>
                </div>

                {/* CARD  */}
                <div className='flex justify-center items-center gap-x-[2rem] mt-8 flex-wrap'>
                    <div className='bg-white shadow-2xl p-6 rounded-2xl border border-[lightgray] min-w-[23rem] max-w-[23rem] mb-5'>
                        <h1 className='text-[1.5rem] font-bold'>Competitive Fixed <br />Shipping Rates</h1>
                        <p className='text-sm mt-4'>NullShip's commitment to fixed shipping rates eliminates cost unpredictability. Businesses can accurately budget without worrying about unexpected expenses, making NullShip an ideal choice for cost-effective shipping solutions.</p>
                        <img src="https://nullship.gg/assets/Report-CMYZYqKn.svg" alt="" className='mt-5' />
                    </div>
                    <div className='bg-white shadow-2xl p-6 rounded-2xl border border-[lightgray] min-w-[23rem] max-w-[23rem] mb-5'>
                        <h1 className='text-[1.5rem] font-bold'>Around The Clock 24/7 <br /> Support</h1>
                        <p className='text-sm mt-4'>NullShip provides fast, efficient, 24/7 customer service. Our expert team promptly handles technical issues and shipping queries, ensuring a seamless and hassle-free experience for businesses.</p>
                        <img src="https://nullship.gg/assets/Chat-DPXI6Qtp.svg" alt="" className='mt-5' />
                    </div>
                    <div className='bg-white shadow-2xl p-6 rounded-2xl border border-[lightgray] min-w-[23rem] max-w-[23rem] mb-5'>
                        <h1 className='text-[1.5rem] font-bold'>Saving Time and <br /> Money</h1>
                        <p className='text-sm mt-4'>NullShip's commitment to fixed shipping rates eliminates cost unpredictability. Businesses can accurately budget without worrying about unexpected expenses, making NullShip an ideal choice for cost-effective shipping solutions.</p>
                        <img src="https://nullship.gg/assets/Order-DV5Vy_6n.svg" alt="" className='mt-5' />
                    </div>
                </div>

            </div>

            {/* SERVICES HERO  */}

            <div className='flex justify-center lg:justify-between items-center mt-[10rem] flex-wrap'>

                <div className='lg:block flex justify-center items-center flex-col'>
                    <button className='bg-orangeColor text-white h-[2rem] px-3 rounded-md tex-sm'>OUR SERVICES</button>
                    <h1 className='mt-[2rem] text-[3rem] font-bold leading-[3.5rem]'>Our ecommerce <br />shipping solutions <br /> make shipping easy</h1>
                    <p className='mt-6 text-lg font-semibold mb-7'>NullShip makes you exceptionally efficient at syncing,<br />managing, and shipping your orders with it’s multiple <br /> integration partners.</p>
                    <button className='bg-[#0A1B3C] text-white w-[10rem] h-[3rem] rounded-xl text-lg font-semibold'>Read More</button>
                </div>

                <div className='lg:block flex justify-center items-center flex-col lg:mt-0 mt-10'>
                    <img src="https://nullship.gg/assets/EcomSol-DWheqw9P.svg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Services