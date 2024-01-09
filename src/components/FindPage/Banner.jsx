import classNames from 'classnames';
import React from 'react';

const Banner = ({ title, children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center py-5 bg-gray-300 md:pb-8 md:pt-12',
        className
      )}
    >
      <div className='text-xl font-bold lg:text-3xl max-w-prose'>{title}</div>
      {children}
    </div>
  );
};

export default Banner;
