import React from 'react';

const StepBox = ({ children }) => {
  return (
    <div className='py-0.5 px-1.5 mt-8 mb-2  border-2 border-slate-950 rounded-md'>
      {children}
    </div>
  );
};

export default StepBox;
