import React from 'react'

const Counters = () => {
    return (
        <div className='mx-6 sm:mx-8 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='flex flex-col h-40 justify-center items-center shadow-custom text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'>
                <span className=' text-4xl font-extrabold mb-2'>5,000+</span>
                <span className='font-bold text-lg'>Appliances Fixed</span>
            </div>
            <div className='flex flex-col h-40 justify-center items-center shadow-custom text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'>
                <span className=' text-4xl font-extrabold mb-2'>2,512+</span>
                <span className='font-bold text-lg'>Customers Satisfaction</span>
            </div>
            <div className='flex flex-col h-40 justify-center items-center shadow-custom text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'>
                <span className=' text-4xl font-extrabold mb-2'>15+</span>
                <span className='font-bold text-lg'>Years' Experience</span>
            </div>
            <div className='flex flex-col h-40 justify-center items-center shadow-custom text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'>
                <span className=' text-4xl font-extrabold mb-2'>100%</span>
                <span className='font-bold text-lg'>Qualified Team</span>
            </div>
        </div>
    )
}

export default Counters