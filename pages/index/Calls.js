import React from 'react'
import Image from 'next/image'
const Calls = () => {
    return (
        <div className="flex flex-row w-full fixed justify-between bottom-0 z-50 items-end md:px-3 mb-2">
            <div>

                <a href="tel:+923058034549">
                    <Image src="/CallsAssets/phone.png" width={60} height={100} className="ml-2 mb-1 shadow-custom rounded-full" />
                </a>
            </div>
            <div className='flex flex-row items-start'>
                <span className='bg-white text-gray-700 px-2 mr-2'>Need Help? Chat with us</span>
                <a href="https://api.whatsapp.com/send?phone=+923058034549">
                    <Image src="/CallsAssets/whatsaap.png" width={70} height={100} className="shadow-custom rounded-full" />
                </a>
            </div>
        </div>
    )
}

export default Calls