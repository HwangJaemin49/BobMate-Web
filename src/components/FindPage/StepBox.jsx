import React from 'react';
import Typography from './Typography';

const StepBox = ({ children }) => {
  return (
    <Typography.Body2 className='px-4 py-2 mt-16 mb-6 text-white rounded-[10px]  bg-grayscale-800 w-[74px] h-[37px]'>
      {children}
    </Typography.Body2>
  );
};

export default React.memo(StepBox);
