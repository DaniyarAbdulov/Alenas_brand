import React from 'react';

const Banner = ({ setShowModal, setShowVideo }) => {
  return (
    <div className='hidden md:flex isolate rounded-t-sm rounded-b-sm bg-black justify-center py-1 sticky top-0 z-10'>
      <div className='flex flex-row gap-5'>
        <text className='font-sans text-white'>Purchase now with 60%</text>
        <button
          onClick={() => setShowModal(true)}
          className='font-sans text-white text-sm bg-pink-400 hover:bg-pink-500 focus:outline-none rounded-lg py-0.5 px-2.5'
        >
          <span>
            register now
            <span aria-hidden='true'>&rarr;</span>
          </span>
        </button>
        <button
          onClick={() => setShowVideo(true)}
          className='font-sans text-white text-sm bg-pink-400 hover:bg-pink-500 focus:outline-none rounded-lg py-0.5 px-2.5'
        >
          <span>
            greeting Video
            <span aria-hidden='true'>&rarr;</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
