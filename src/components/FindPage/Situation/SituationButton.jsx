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
        'px-9 py-6 text-center border-2 rounded-full border-grayscale-800 bg-white',
        'hover:scale-105 transition-transform ease-in-out duration-500 ',
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
