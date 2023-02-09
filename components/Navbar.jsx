import React, {useContext} from 'react'

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
                <Link href="/">
                    <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                        Esteban
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                <Link href="/">
                    <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                        About
                    </span>
                </Link>
                <Link href="/">
                    <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                        Contact Me
                    </span>
                </Link>
                <Link href="/">
                    <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                        Blog
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar