import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography';

const MemberBox = ({
  title,
  children,
  isSelected,
  className,
  value,
  onClick,
}) => {
  return (
    <button value={value} onClick={onClick}>
      <div
        className={classNames(
          'rounded-[20px] bg-white border-2 border-grayscale-800 flex justify-center items-center text-center w-[384px] h-[156px] ',
          'hover:scale-105 transition-transform ease-in-out duration-500 ',
          { 'scale-105 ': isSelected },
          className
        )}
      >
        <Typography.H3>{title}</Typography.H3>
        <Typography.SubH>{children}</Typography.SubH>
      </div>
    </button>
  );
};

export default MemberBox;
