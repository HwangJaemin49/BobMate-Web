import classNames from 'classnames';
import React from 'react';
import Typography from './Typography';

const Banner = ({ title, children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center py-5 bg-yellow-50 md:pb-8 md:pt-12 border-b-[1px] border-grayscale-100',
        className
      )}
    >
      <Typography.H3>{title}</Typography.H3>
      {children}
    </div>
  );
};

export default React.memo(Banner);
