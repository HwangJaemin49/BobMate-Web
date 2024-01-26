import classNames from 'classnames';
import React from 'react';

const RoundButton = ({
  title,
  onClick,
  value,
  isSelected,
  children,
  className,
}) => {
  return (
    <button
      className={classNames(
        'rounded-full bg-white flex flex-col items-center justify-around text-center p-10 m-5 border-black border-2',
        'hover:scale-105  transition-transform ease-in-out duration-200 ',
        { 'scale-105': isSelected },
        className
      )}
      value={value}
      onClick={onClick}
    >
      <div className='text-xl font-bold lg:text-2xl max-w-prose break-keep'>
        {title}
      </div>
      {children ? (
        <div className='text-xs lg:text-sm break-keep'>{children}</div>
      ) : (
        <></>
      )}
    </button>
  );
};

export default RoundButton;
