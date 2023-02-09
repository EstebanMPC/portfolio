import React from 'react'

const Footer = () => {
  return (
    <div className="w-5/6 h-80 border-t-2 border-black">
        <div className="flex flex-row items-center justify-center content-center m-40">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Work</a>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">About</a>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Blog</a>
        </div>
    </div>
  )
}

export default Footer