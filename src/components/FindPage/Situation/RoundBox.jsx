import classNames from 'classnames';
import React from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';

const RoundBox = ({ children, isSelected, className, value, onClick }) => {
  return (
    <button value={value} onClick={onClick}>
      <MaxWidthWrapper
        className={classNames(
          'rounded-2xl bg-white border-2 border-black flex flex-col items-center text-center p-10 ',
          'hover:scale-105 transition-transform ease-in-out duration-500 ',
          { 'scale-105 ': isSelected },
          className
        )}
      >
        <div className='text-xl font-bold lg:text-2xl max-w-prose'>
          {children}
        </div>
      </MaxWidthWrapper>
    </button>
  );
};

export default RoundBox;
