import React, {useContext} from 'react'

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="shadow-lg mx-auto px-4">
        <div className=" w-full inline-block  py-4">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="text-purple-600 font-bold text-4xl md:float-right align-middle ml-4 font-semibold cursor-pointer">
                        ESTEBAN
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents ">
                <Link href="/">
                    <span className="font-bold hover:text-purple-600 md:float-right align-middle mt-2 ml-4 font-semibold cursor-pointer">
                        About
                    </span>
                </Link>
                <Link href="/">
                    <span className="font-bold hover:text-purple-600 md:float-right align-middle  mt-2 ml-4 font-semibold cursor-pointer">
                        Contact Me
                    </span>
                </Link>
                <Link href="/">
                    <span className="font-bold hover:text-purple-600 md:float-right align-middle  mt-2 ml-4 font-semibold cursor-pointer">
                        Blog
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar