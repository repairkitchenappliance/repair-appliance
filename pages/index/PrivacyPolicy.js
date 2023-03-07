import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='mx-6 sm:mx-8 md:mx-20 gap-4 my-5'>
            <div className=" text-gray-700 mb-5">
                <span className="text-white text-sm font-extrabold bg-blue-500 px-2 my-1">
                    Tearms and Condations
                </span>
                <h1 className="text-xl lg:text-3xl sm:text-2xl font-bold leading-none">
                    Privacy Policy
                </h1>
                <div className="flex my-2">
                    <div className="w-12 mr-1 h-0 border border-b-4 border-blue-500"></div>
                    <div className="w-2 h-0 border border-b-4 border-blue-500"></div>
                </div>
                <ul className='list-style'>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>Personal Information Collection: Explain what types of personal information you collect from users, such as names, email addresses, phone numbers, and mailing addresses.</li>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>Use of Personal Information: Describe how you use the personal information you collect, such as to fulfill orders, process payments, or provide customer support.</li>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>Disclosure of Personal Information: Detail how and when you may disclose personal information to third parties, such as to shipping providers, payment processors, or law enforcement agencies.</li>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>Cookies and Tracking Technologies: Inform users if your website uses cookies or other tracking technologies and how these technologies may be used to collect and store personal information.</li>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>Security Measures: Describe the security measures you have in place to protect personal information from unauthorized access, use, or disclosure, such as encryption and firewalls.</li>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>User Choices: Explain how users can exercise their choices regarding the collection, use, and disclosure of their personal information, such as opting out of email communications or requesting the deletion of their personal information.</li>
                    <li className='bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 rounded-md leading-none mt-1 text-white'>Compliance with Laws: State how you comply with relevant privacy laws, such as the General Data Protection Regulation (GDPR) or</li>
                </ul>
            </div>
        </div>
    )
}

export default PrivacyPolicy