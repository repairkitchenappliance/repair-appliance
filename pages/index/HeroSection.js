import React from 'react'
import Image from "next/image";
import { Link } from "react-scroll";
const HeroSection = () => {
    return (
        <div className="flex items-center justify-between flex-col-reverse md:flex-row  mx-6 sm:mx-8 md:mx-20 py-20">
            <div className="md:w-2/4 flex flex-col mt-3 md:mt-0">
                <div className="flex flex-col text-gray-700 items-start">
                    <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                        YOUR TRUST OUR CONFIDENCE
                    </span>
                    <span className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                        QUICK AND RELAIBLE
                    </span>
                    <span className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                        APPLIANCE REPAIR SERVICE
                    </span>
                    <div className="flex my-2">
                        <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                        <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                    </div>
                </div>
                <p className="text-gray-800 mt-2 md:w-4/5">
                    At our Kitchen Appliance Repair Service, we understand how important it is for your
                    appliances to be in top working condition. Our team of highly trained and experienced
                    technicians are dedicated to providing fast, reliable and cost-effective service to get
                    your appliances back to working order as soon as possible.
                </p>
                <div className="mt-4">
                    <a href="tel:+923058034549">
                        <button className="bg-blue-500 px-5 py-1 text-white font-medium border-2 border-blue-500">
                            CALL NOW
                        </button>
                    </a>
                    <Link to="schedule" smooth={true}>
                        <button className="px-5 py-1 font-medium border-2 border-blue-500 text-blue-500">
                            BOOK NOW
                        </button>
                    </Link>
                </div>
            </div>
            <div className="bg-gray-500 rounded-tl-lg">
                <Image
                    src="/IndexAssets/heroImage1.png"
                    className="object-cover bg-blue-500 z-50 p-4"
                    width={550}
                    height={550}
                    alt="image"
                />
            </div>
        </div>
    )
}

export default HeroSection