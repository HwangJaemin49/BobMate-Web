import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const NextButton = ({ children, className, onClick }) => {
  return (
    <button
      className={classNames(
        'mx-3 py-4 px-6 rounded-[10px] w-[102px] h-[57px]',
        'hover:scale-105  transition-transform ease-in-out duration-100',
        className
      )}
      onClick={onClick}
    >
      <Typography.Body1>{children}</Typography.Body1>
    </button>
  );
};

export default NextButton;
