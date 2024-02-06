import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const Banner = ({ title, children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center  bg-yellow-50  border-b-[1px] border-grayscale-100 h-60',
        className
      )}
    >
      <Typography.H3 className='mt-[77px] mb-[40px]'>{title}</Typography.H3>
      {children}
    </div>
  );
};

export default React.memo(Banner);
