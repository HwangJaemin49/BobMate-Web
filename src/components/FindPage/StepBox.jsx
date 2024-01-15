import React from 'react';
import Typography from './Typography';

const StepBox = ({ children }) => {
  return (
    <Typography.Body2 className='py-0.5 px-1.5 mt-8 mb-2 border-2 border-black rounded-md'>
      {children}
    </Typography.Body2>
  );
};

export default StepBox;
