import React from 'react'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GroupIcon from '@mui/icons-material/Group';
import Image from 'next/image';
const WhyUs = () => {
    return (
        <div className='mx-6 sm:mx-8 md:mx-20 pt-10 mb-12 md:mb-0 md:my-20'>
            <div className='flex items-center flex-col-reverse md:flex-row'>
                <div className='flex flex-col items-start md:w-2/4'>
                    <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                        WHY CHOOSE US?
                    </span>
                    <span className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none text-gray-700">
                        QUICK AND FAST REPAIR AND INSTALLATION
                    </span>
                    <div className="flex my-2">
                        <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                        <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                    </div>
                    <snap className="text-gray-700 mt-2 leading-none mb-4">
                        We fix your appliences like Washing machines, Driers, and Dishwasher. We have ten plus years of experience and thousends of sattesfied clients.
                        We fix your appliences like Washing machines, Driers, and Dishwasher. We have ten plus years of experience and thousends of sattesfied clients.
                    </snap>
                    <div className='flex gap-6 mt-4'>
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center gap-1'>
                                <TravelExploreIcon className='text-blue-600 text-3xl' />
                                <snap className='font-bold text-gray-700 text-lg'>Experience</snap>
                            </div>
                            <span className='font-bold text-gray-600'>+ 10 years</span>
                        </div>
                        <div className='border-l-2 border-gray-300'></div>
                        <div className='flex flex-col items-center '>
                            <div className='flex items-end gap-1'>
                                <GroupIcon className='text-blue-600 text-3xl' />
                                <snap className='font-bold text-gray-700 text-lg'>Clients</snap>
                            </div>
                            <span className='font-bold text-gray-600'>+ 50 000</span>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className='bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500'>LEARN MORE</button>
                    </div>
                </div>
                <div className=''>
                    <Image
                        src="/WhyUs/hero2.jpg"
                        className="object-cover"
                        style={{}}
                        width={550}
                        height={550}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default WhyUs