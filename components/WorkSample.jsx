import React from 'react'

const WorkSample = ({work}) => {
  return (
    <div className="flex flex-row h-screen max-w-4xl ">
      <div className="w-1/2 m-auto pr-10 flex flex-col items-start justify-center content-center">
        <h2 className="text-purple-600 font-bold text-4xl text-left">{work.title}</h2>
        <h4 className="text-lg font-thin max-w-xl my-6 text-left">{work.description}</h4>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-5 rounded text-left">See more</button>
      </div>
      <div className="w-1/2 m-auto pl-10 flex">
        <img className="object-scale-down m-auto h-auto" src={work.imgFile} />
      </div>
    </div>
  )
}

export default WorkSample

// 1025 × 1391