import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography';

const SituationButton = ({
  isSelected,
  children,
  className,
  value,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={classNames(
        'px-9 py-6 text-center border-2 rounded-full border-grayscale-800 ',
        {
          'hover:scale-105 hover:bg-grayscale-100  transition-transform ease-in-out duration-200 ':
            !disabled,
          'scale-105 bg-grayscale-300': isSelected,
        },
        className
      )}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography.SubH>{children}</Typography.SubH>
    </button>
  );
};

export default SituationButton;
