import classNames from 'classnames';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';

const RoundButton = ({ title, isSelected, children, className }) => {
  return (
    <MaxWidthWrapper
      className={classNames(
        'rounded-full bg-slate-300 flex flex-col items-center justify-around text-center p-10 m-5',
        'hover:scale-105 hover:bg-slate-400 transition-transform ease-in-out duration-500 ',
        { 'scale-105 bg-slate-400': isSelected },
        className
      )}
    >
      <div className='text-xl font-bold lg:text-2xl max-w-prose'>{title}</div>
      <div className='mt-4 text-xs lg:text-sm break-keep'>{children}</div>
    </MaxWidthWrapper>
  );
};

export default RoundButton;
