import React from 'react'
import Image from 'next/image'
const Services = () => {
    return (
        <div className='mx-6 sm:mx-8 md:mx-20 md:py-20'>
            <div className="flex flex-col text-gray-700 items-start">
                <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                    WHAT WE DO?
                </span>
                <span className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                    SERVICES
                </span>
                <div className="flex my-2">
                    <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                    <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                </div>
                <snap className="text-gray-700 mt-2 leading-none mb-4 w-5/5 md:w-3/5">
                    We fix your appliences like Washing machines, Driers, and Dishwasher. We have ten plus years of experience and thousends of sattesfied clients.
                </snap>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -z-10 mx-auto">
                    <div className="text-gray-200 cursor-pointer">
                        <span className='absolute bg-blue-500 px-2 py-1 rounded-md mt-4 font-bold ml-4'>More</span>
                        <Image
                            src="/ServiceAssets/washingMachine.jpg"
                            className="w-full object-cover h-"
                            alt="Image"
                            style={{ height: "400px", borderRadius: "5px" }}
                            height={400}
                            width={400}
                        />
                        <div className='mt-2 flex flex-col items-start'>
                            <snap className="text-gray-100 bg-blue-500 px-2 py-1 text-sm leading-3">REPAIR WASHING MACHINE</snap>
                            <snap className="text-gray-700 text-lg font-bold my-1">Washing Machine Repaire service</snap>
                            <p className='text-gray-700 text-sm leading-4'>We Provide you a very quick and relaible Washing Machine Repair Service. We are the best in applience repairing in the city</p>
                            <div className="mt-4">
                                <a href="tel:+923058034549">
                                    <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                                        CALL NOW
                                    </button>
                                </a>
                                <button className="px-5 py-1 cursor-pointer font-medium border-2 border-blue-500 text-blue-500">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-200 cursor-pointer">
                        <span className='absolute bg-blue-500 px-2 py-1 rounded-md mt-4 font-bold ml-4'>More</span>
                        <Image
                            src="/ServiceAssets/dishWasher.jpg"
                            className="w-full object-cover"
                            alt="Image"
                            style={{ height: "400px", borderRadius: "5px" }}
                            height={400}
                            width={400}
                        />
                        <div className='mt-2 flex flex-col items-start'>
                            <snap className="text-gray-100 bg-blue-500 px-2 py-1 text-sm leading-3">REPAIR Dishwasher</snap>
                            <snap className="text-gray-700 text-lg font-bold my-1">Dishwasher Repaire service</snap>
                            <p className='text-gray-700 text-sm leading-4'>We Provide you a very quick and relaible Washing Machine Repair Service. We are the best in applience repairing in the city</p>
                            <div className="mt-4">
                                <a href="tel:+923058034549">
                                    <button className="bg-blue-500 px-5 py-1 cursor-pointer text-white font-medium border-2 border-blue-500">
                                        CALL NOW
                                    </button>
                                </a>
                                <button className="px-5 py-1 cursor-pointer font-medium border-2 border-blue-500 text-blue-500">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-200 cursor-pointer">
                        <span className='absolute bg-blue-500 px-2 py-1 rounded-md mt-4 font-bold ml-4'>More</span>
                        <Image
                            src="/ServiceAssets/dryer.jpg"
                            className="w-full object-cover"
                            alt="Image"
                            style={{ height: "400px", borderRadius: "5px" }}
                            height={400}
                            width={400}
                        />
                        <div className='mt-2 flex flex-col items-start'>
                            <snap className="text-gray-100 bg-blue-500 px-2 py-1 text-sm leading-3">REPAIR Dryer MACHINE</snap>
                            <snap className="text-gray-700 text-lg font-bold my-1">Dryer Machine Repaire service</snap>
                            <p className='text-gray-700 text-sm leading-4'>We Provide you a very quick and relaible Washing Machine Repair Service. We are the best in applience repairing in the city</p>
                            <div className="mt-4">
                                <a href="tel:+923058034549">
                                    <button className="bg-blue-500 px-5 py-1 cursor-pointer text-white font-medium border-2 border-blue-500">
                                        CALL NOW
                                    </button>
                                </a>
                                <button className="px-5 py-1 cursor-pointer font-medium border-2 border-blue-500 text-blue-500">
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services