import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const Circle = ({ isNow, children, className }) => {
  return (
    <div
      className={classNames(
        'rounded-full w-6 h-6 border-2 border-black',
        'flex justify-center items-center',
        { 'bg-yellow-600 ': isNow },
        { 'bg-white': !isNow },
        className
      )}
    >
      <Typography.Body2>{children}</Typography.Body2>
    </div>
  );
};

const StepCircle = ({ step }) => {
  return (
    <div className='flex items-center justify-between mt-5'>
      <Circle isNow={step === 1}>1</Circle>
      <div className='w-5 border-t-2 border-black'></div>
      <Circle isNow={step === 2}>2</Circle>
      <div className='w-5 border-t-2 border-black'></div>
      <Circle isNow={step === 3}>3</Circle>
    </div>
  );
};

export default React.memo(StepCircle);
