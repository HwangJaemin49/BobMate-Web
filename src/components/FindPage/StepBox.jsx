import React from 'react';
import Typography from './Typography';
import classNames from 'classnames';

const StepBox = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'px-4 py-2  text-white rounded-[10px]  bg-grayscale-800 w-[74px] h-[37px] flex justify-center items-center',
        className
      )}
    >
      <Typography.Body2>{children}</Typography.Body2>
    </div>
  );
};

export default React.memo(StepBox);
