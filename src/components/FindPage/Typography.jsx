import classNames from 'classnames';
import React from 'react';

const Typography = {
  Title: ({ className, children }) => {
    return (
      <div
        className={classNames(
          className,
          'leading-[50px] font-bold text-[50px]'
        )}
      >
        {children}
      </div>
    );
  },
  H1: ({ className, children }) => {
    return (
      <h1 className={classNames(className, 'leading- font-bold text-[38px]')}>
        {children}
      </h1>
    );
  },
  H2: ({ className, children }) => {
    return (
      <h2 className={classNames(className, 'leading- font-bold text-[28px]')}>
        {children}
      </h2>
    );
  },
  H3: ({ className, children }) => {
    return (
      <h3 className={classNames(className, 'leading- font-bold text-[22px]')}>
        {children}
      </h3>
    );
  },
  SubH: ({ className, children }) => {
    return (
      <h4
        className={classNames(className, 'leading- text-[18px] font-semibold')}
      >
        {children}
      </h4>
    );
  },
  Body1: ({ className, children }) => {
    return (
      <div
        className={classNames(className, 'leading- text-[16px] font-medium')}
      >
        {children}
      </div>
    );
  },
  Body2: ({ className, children }) => {
    return (
      <div
        className={classNames(className, 'leading- text-[14px] font-medium')}
      >
        {children}
      </div>
    );
  },
  Caption: ({ className, children }) => {
    return (
      <div
        className={classNames(className, 'leading- text-[12px] font-medium')}
      >
        {children}
      </div>
    );
  },
};

export default Typography;
