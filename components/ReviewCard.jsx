import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div className='w-100 flex justify-center  '>
      <div className=" w-5/6 flex flex-col items-center justify-center content-center">
          <h4 className="text-lg font-thin w-5/6 my-6 text-center leading-8">{review.post}</h4>
          <h4 className="text-purple-600 font-bold my-6">{review.author}</h4>
      </div>
    </div>
  )
}

export default ReviewCard