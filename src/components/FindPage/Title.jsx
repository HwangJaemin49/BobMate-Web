import React from 'react';

const Title = ({ children }) => {
  return (
    <div className='text-2xl font-black text-center lg:m-6 md:m-3 lg:text-4xl md:text-3xl'>
      {children}
    </div>
  );
};

export default Title;
