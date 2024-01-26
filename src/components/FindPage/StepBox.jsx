import React from 'react';
import Typography from './Typography';

const StepBox = ({ children }) => {
  return (
    <Typography.Body1 className='px-4 py-2 mt-16 mb-6 text-white rounded-[10px]  bg-grayscale-800 w-[72px] h-[37px]'>
      {children}
    </Typography.Body1>
  );
};

export default React.memo(StepBox);
