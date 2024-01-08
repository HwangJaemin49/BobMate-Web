import classNames from 'classnames';
import React from 'react';

const Title = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'text-3xl font-black text-center lg:m-6 md:m-3 lg:text-4xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Title;
