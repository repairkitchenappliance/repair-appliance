import React from 'react'

import Image from "next/image";
import Schedule from '../../pages/index/Schedule'
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import { Link } from "react-scroll";
import Links from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Counters from '../index/Counters'
const About = () => {
    return (
        <>
            <div className="bg-blue-200 flex items-center justify-between flex-col-reverse md:flex-row  px-6 sm:px-8 mb-14 md:mb-0 md:px-20 md:py-32 ">
                <div className="md:w-2/4 flex flex-col mt-30 md:mt-0">
                    <div className="flex flex-col text-gray-700 items-start">
                        <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                            WHO WE ARE
                        </span>
                        <p className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                            ABOUT US
                        </p>
                        <div className="flex my-2">
                            <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                            <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                        </div>
                    </div>
                    <p className="text-gray-800 mt-2 md:w-4/5 font-medium">
                        Welcome to our kitchen appliance repair service in Dubai! We are a team of
                        experienced technicians dedicated to providing top-notch repair and maintenance
                        services for all types of kitchen appliances. Our goal is to ensure that your
                        appliances are running smoothly and efficiently, so you can enjoy a functional and comfortable kitchen
                    </p>
                    <div className="mt-4">
                        <a href="tel:+971568798195">
                            <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                                CALL NOW
                            </button>
                        </a>
                        <Link
                            to="schedule"
                            smooth={true}>
                            <button className="px-5 py-1 font-medium border-2 border-blue-500 text-blue-500">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-24 md:mt-0">
                    <Image
                        src="/AboutAssets/Hero1.webp"
                        className="object-cover bg-blue-500 z-50 p-4"
                        width={550}
                        height={550}
                        alt="Hero Image"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-8 mb-14 md:mb-0 md:px-20 md:-mt-24 pb-10'>
                <div className=' h-40 flex items-center flex-col justify-center bg-white hover:bg-blue-500 text-gray-800 hover:text-white cursor-pointer about-us-cards'>
                    <HandymanIcon className='text-5xl' />
                    <span className='font-bold '>REPAIR</span>
                </div>
                <div className=' h-40 flex items-center flex-col justify-center bg-white hover:bg-blue-500 text-gray-800 hover:text-white cursor-pointer about-us-cards'>
                    <HomeWorkOutlinedIcon className='text-5xl' />
                    <span className='font-bold '>Improve</span>
                </div>
                <div className=' h-40 flex items-center flex-col justify-center bg-white hover:bg-blue-500 text-gray-800 hover:text-white cursor-pointer about-us-cards'>
                    <HandymanIcon className='text-5xl' />
                    <span className='font-bold '>REPAIR</span>
                </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row  px-6 sm:px-8 mb-14 md:mb-0 md:px-20 ">

                <div className="">
                    <Image
                        src="/AboutAssets/professional-img.png"
                        className="object-coverz-50 p-4"
                        width={500}
                        height={500}
                        alt="Hero Image"
                    />
                </div>
                <div className="md:w-2/4 flex flex-col mt-3 md:mt-0">
                    <div className="flex flex-col text-gray-700 items-start">
                        <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                            Your Trust Is Enough
                        </span>
                        <p className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none md:w-4/5">
                            WE PROVIDE PROFESSIONAL
                            APPLIANCES REPAIR.
                        </p>
                        <div className="flex my-2">
                            <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                            <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                        </div>
                    </div>
                    <p className="text-gray-800 mt-2 md:w-4/5 font-medium">
                        Welcome to our kitchen appliance repair service in Dubai! We are a team of
                        experienced technicians dedicated to providing top-notch repair and maintenance
                        services for all types of kitchen appliances. Our goal is to ensure that your
                        appliances are running smoothly and efficiently, so you can enjoy a functional and comfortable kitchen
                    </p>
                    <div className="mt-4">
                        <a href="tel:+971568798195">
                            <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                                CALL NOW
                            </button>
                        </a>
                        <Link
                            to="schedule"
                            smooth={true}>
                            <button className="px-5 py-1 font-medium border-2 border-blue-500 text-blue-500">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className='mx-6 sm:mx-8 mb-14 md:mb-0 md:mx-20'>
                <div className='about-bg-image flex flex-col items-center justify-center'>
                    <h1 className='text-2xl md:text-4xl font-extrabold capitalize md:w-3/4 text-center text-white mb-8'>you need to fix your kitchen appliacne by our reliable and quick service then call us.</h1>
                    <a href="tel:+971568798195">
                        <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                            CALL NOW
                        </button>
                    </a>
                </div>
            </div> */}
            {/* <div to="schedule" className='bg-blue-100'>
                <Schedule />
            </div> */}
            <Counters />
            <Links
                href="/"
            >
                <span className='fixed top-20 z-50 bg-white border shadow-sm'><ArrowBackIcon className="text-4xl" /></span>
            </Links>

        </>
    )
}

export default About