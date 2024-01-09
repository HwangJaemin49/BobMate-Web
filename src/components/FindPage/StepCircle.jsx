import classNames from 'classnames';
import React from 'react';

const Circle = ({ isNow, children, className }) => {
  return (
    <div
      className={classNames(
        'rounded-full bg-white w-4 h-4 p-1 border-2 border-slate-950 text-xs text-center',
        'flex justify-center items-center',
        { 'bg-gray-950 text-white': isNow },
        className
      )}
    >
      {children}
    </div>
  );
};

const StepCircle = ({ step }) => {
  return (
    <div className='flex items-center mt-5'>
      <Circle isNow={step === 1}>1</Circle>
      <div className='w-5 border-t-2 border-black'></div>
      <Circle isNow={step === 2}>2</Circle>
      <div className='w-5 border-t-2 border-black'></div>
      <Circle isNow={step === 3}>3</Circle>
    </div>
  );
};

export default StepCircle;
