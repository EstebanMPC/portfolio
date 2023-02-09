import React from 'react'

const Aboutme = () => {
  return (
    <div className='w-100 h-screen flex justify-center  '>
        <div className=" w-5/6 flex flex-col items-center justify-center content-center">
            <h2 className="text-4xl ">"User-friendly simplicity"</h2>
            <h4 className="text-lg w-5/6 my-6 text-center leading-8">
                At its best, Shopify is a complex consumer-facing platform that delivers great-looking sites and an amazing customer experience. That is why I focus on turning problems into simple, beautiful, and intuitive solutions with the customer in mind.
            </h4>
            <h4 className="font-bold my-6">Here are a few</h4>
            <svg fill="none" className="animate-bounce m-3" stroke="currentColor" strokeWidth={1.25} height="45px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
      </div>
    </div>
  )
}

export default Aboutme