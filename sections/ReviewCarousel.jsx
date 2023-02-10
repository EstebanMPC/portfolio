import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ReviewCard } from '../components';

const reviews = [
  {post: 'Esteban was on it to make sure that our client was able to obtain the right deliverable at the right time. If you need work done right, Esteban will make sure you’re on your way from start to finish.', author:'Michael P.'},
  {post: 'Esteban was very helpful (and cheerful, considering the awful weather!) in understanding what I needed to be done- he explained all my options clearly and completely. I was pleased with the estimate and we were able to lock in everything in one visit.', author:'Laura O.'},
  {post: 'Very informed and very polite. He was patient with my needs and questions.', author:'Just M.'},
  {post: 'Esteban was timely, professional, and well-versed regarding all of the operational components. He quickly identified our concerns and even identified other services needed to enable a more safe and efficient operation.', author:'Larry H.'},
  {post: 'Esteban was great. Courteous and professional, he explained what my options were and got me the best deal possible.Really appreciate it!', author:'Edward S.'},
  {post: 'Very happy with Mr. Esteban Porras - very competent and helpful!', author:'Steph S.'},
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const ReviewCarousel = () => {

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-purple-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" height="45px" className=" text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-purple-600 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" height="45px" className=" text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className="mb-8">
        <div className='flex flex-col'>
            <h2 className="text-purple-600 m-auto font-bold text-4xl ">Reviews</h2>
            <h4 className="text-lg font-thin w-5/6 m-auto my-6 text-center leading-8">Here's what some of my customers have to say about me.
            </h4>
        </div>
        
        <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
            {reviews.map((review, index) => (
            <ReviewCard key={review.post} review={review} />
            ))}
        </Carousel>
    </div>
  );
};

export default ReviewCarousel;