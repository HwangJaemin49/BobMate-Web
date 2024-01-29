import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography';

const SituationButton = ({
  isSelected,
  children,
  className,
  value,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'px-9 py-6 mb-2 text-center border-2 w-[384px] rounded-full border-grayscale-800 bg-white',
        'hover:scale-105 transition-transform ease-in-out duration-500 ',
        'sm:text-sm text-xs',
        { 'scale-105 ': isSelected },
        className
      )}
      value={value}
      onClick={onClick}
    >
      <Typography.SubH>{children}</Typography.SubH>
    </button>
  );
};

export default SituationButton;
