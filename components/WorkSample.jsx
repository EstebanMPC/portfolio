import React from 'react'

const WorkSample = ({work}) => {
  return (
    <div className="flex flex-row items-center justify-center content-center h-64 my-16">
      <div className="h-64 w-1/2 flex flex-col items-start justify-center content-center border-black border-2 ">
        <h2 className="text-4xl">{work.title}</h2>
        <h4 className="text-lg max-w-xl my-6">{work.description}</h4>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-7 rounded">See more</button>
      </div>
      <div className="h-64 w-1/2 flex flex-col items-center justify-center content-center border-black border-2 ">
        <img class="object-contain h-256 w-344" src={work.imgFile} />
      </div>
    </div>
  )
}

export default WorkSample


