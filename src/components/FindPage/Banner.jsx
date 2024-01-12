import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const Banner = ({ title, children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center py-5 bg-grayscale-200 md:pb-8 md:pt-12',
        className
      )}
    >
      <Typography.H2 className='text-xl font-bold lg:text-3xl max-w-prose'>
        {title}
      </Typography.H2>
      {children}
    </div>
  );
};

export default Banner;
