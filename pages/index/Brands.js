import React from 'react'
import Image from 'next/image'
const Brands = () => {
    return (
        <div className='mx-6 sm:mx-8 md:mx-20 mb-14 md:mb-0 md:py-20'>
            <div className="flex flex-col text-gray-700 items-start">
                <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                    THESE ARE THE
                </span>
                <span className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                    BRANDS
                </span>
                <div className="flex my-2">
                    <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                    <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                </div>
                <snap className="text-gray-700 mt-2 leading-none mb-4 w-5/5 md:w-3/5">
                    Following are the brands that we have worked on for years and years, we have experts who know all thes brands and their technologies. You get any problem or you have any need of repairing of a dryer, washing machine, or dishwasher, we are avalable 24/7 to help.
                </snap>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-full mt-5'>
                    <div className=' h-28 md:h-40 flex justify-center items-center font-extrabold text-gray-700 text-xl hover:text-white bg-blue-300 cursor-pointer duration-200 rounded-md'><Image src="/BrandsAssets/Mieli.png" width={150} height={150} /></div>
                    <div className=' h-28 md:h-40 flex justify-center items-center font-extrabold text-gray-700 text-xl hover:text-white bg-blue-300 cursor-pointer duration-200 rounded-md'><Image src="/BrandsAssets/Bosch.png" width={150} height={150} /></div>
                    <div className=' h-28 md:h-40 flex justify-center items-center font-extrabold text-gray-700 text-xl hover:text-white bg-blue-300 cursor-pointer duration-200 rounded-md'><Image src="/BrandsAssets/Siemens.png" width={150} height={150} /></div>
                    <div className=' h-28 md:h-40 flex justify-center items-center font-extrabold text-gray-700 text-xl hover:text-white bg-blue-300 cursor-pointer duration-200 rounded-md'><Image src="/BrandsAssets/LG.png" width={150} height={150} /></div>
                    <div className=' h-28 md:h-40 flex justify-center items-center font-extrabold text-gray-700 text-xl hover:text-white bg-blue-300 cursor-pointer duration-200 rounded-md'><Image src="/BrandsAssets/Ariston.png" width={150} height={150} /></div>

                </div>
            </div>
        </div>
    )
}

export default Brands