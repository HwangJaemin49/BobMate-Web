import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const Circle = ({ isNow, children, className }) => {
  return (
    <Typography.Caption
      className={classNames(
        'rounded-full w-4 h-4 p-1 border-2 border-black text-center tracking-normal',
        'flex justify-center items-center',
        { 'bg-black text-white': isNow },
        { 'bg-white': !isNow },
        className
      )}
    >
      {children}
    </Typography.Caption>
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
