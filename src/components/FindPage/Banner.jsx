import React from 'react';

const Banner = ({ title, children }) => {
  return (
    <div className='flex flex-col items-center bg-gray-300 py-5 md:py-12'>
      <div className='lg:text-3xl text-xl max-w-prose font-bold'>{title}</div>
      {children}
    </div>
  );
};

export default Banner;
