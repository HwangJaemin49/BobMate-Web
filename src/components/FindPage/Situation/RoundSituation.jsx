import classNames from 'classnames';
import React from 'react';

const RoundSituation = ({
  isSelected,
  children,
  className,
  value,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'px-6 py-2 mb-2 text-center border-2 w-fit rounded-full border-black',
        'hover:scale-105 hover:bg-grayscale-200 transition-transform ease-in-out duration-500 ',
        'sm:text-sm text-xs',
        { 'scale-105 bg-grayscale-200': isSelected },
        className
      )}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundSituation;
