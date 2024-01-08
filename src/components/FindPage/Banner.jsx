import React from 'react';

const Banner = ({ title, children }) => {
  return (
    <div className='flex flex-col items-center py-5 bg-gray-300 md:pb-8 md:pt-12'>
      <div className='text-xl font-bold lg:text-3xl max-w-prose'>{title}</div>
      {children}
    </div>
  );
};

export default Banner;
