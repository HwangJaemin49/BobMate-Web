import classNames from 'classnames';
import React from 'react';

const Title = ({ children, className }) => {
  return (
    <h2
      className={classNames(
        'text-[50px] sm:text-3xl font-bold text-center lg:m-6 md:m-3 lg:text-4xl tracking-[-1px]',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
