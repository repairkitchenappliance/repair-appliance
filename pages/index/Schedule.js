import React from 'react'
import Image from 'next/image'
const Schedule = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse md:flex-row  mx-6 sm:mx-8 md:mx-20 py-20">
            <div className="flex flex-col mt-3 md:mt-0">
                <div className="flex flex-col text-gray-700 items-start">
                    <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                        TELL US WHEN TO COME?
                    </span>
                    <span className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                        Schedule Your Service
                    </span>
                    <div className="flex my-2">
                        <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                        <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                    </div>
                </div>
                <p className="text-gray-800 mt-2">
                    Our appliance repair service is quick and reliable. We understand the
                    importance of getting your broken appliances fixed as soon as
                    possible.
                </p>
                <div className="mt-4">
                    <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                        CALL NOW
                    </button>
                    <button className="px-5 py-1 font-medium border-2 border-blue-500 text-blue-500">
                        BOOK NOW
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                <div className='flex flex-col bg-white shadow-md py-6 px-4 border border-gray-400 w-full sm:mx-8 md:mx-32'>
                    <input type="text" className='border border-gray-400 p-2 my-2 text-gray-500 outline-none ' placeholder="Full Name" />
                    <input type="text" className='border border-gray-400 p-2 my-2 text-gray-500 outline-none ' placeholder="Phone Number" />
                    <input type="text" className='border border-gray-400 p-2 my-2 text-gray-500 outline-none ' placeholder="Home Address" />
                    <div className='flex'>
                        <input type="date" placeholder="date" className='border border-gray-400 p-2 my-2 text-gray-500 outline-none mr-1 w-full' />
                        <input type="time" placeholder="time" className='border border-gray-400 p-2 my-2 text-gray-500 outline-none ' />
                    </div>
                    <button className=' p-2 bg-blue-600 font-bold text-white'>SUBMIT INFORMATION</button>
                </div>
            </div >
        </div >
    )
}

export default Schedule