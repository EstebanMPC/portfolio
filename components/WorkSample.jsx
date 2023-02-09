import React from 'react'

const WorkSample = ({work}) => {
  return (
    <div className="flex flex-row h-screen max-w-4xl my-16 ">
      <div className="h-72 w-1/2 flex flex-col items-start justify-center content-center">
        <h2 className="text-4xl text-left">{work.title}</h2>
        <h4 className="text-lg max-w-xl my-6 text-left">{work.description}</h4>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-7 rounded text-left">See more</button>
      </div>
      <div className="h-72 w-1/2 flex">
        <img className="object-scale-down m-auto h-72" src={work.imgFile} />
      </div>
    </div>
  )
}

export default WorkSample


