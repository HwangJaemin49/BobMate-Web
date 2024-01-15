import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const NextButton = ({ children, onClick }) => {
  return (
    <div
      className={classNames(
        'mx-2 py-1 px-3 border-2 border-black rounded-md',
        'hover:scale-105 hover:bg-grayscale-200 transition-transform ease-in-out duration-100'
      )}
      onClick={onClick}
    >
      <Typography.Body2>{children}</Typography.Body2>
    </div>
  );
};

export default NextButton;
