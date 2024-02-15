import classNames from 'classnames';
import React from 'react';

const all = 'text-center break-keep';

const Typography = {
  Title: React.memo(({ className, children }) => {
    return (
      <div
        className={classNames(
          className,
          'leading-[50px] font-bold text-[72px]',
          all
        )}
      >
        {children}
      </div>
    );
  }),
  H1: React.memo(({ className, children }) => {
    return (
      <h1 className={classNames(className, ' font-bold text-[60px] ', all)}>
        {children}
      </h1>
    );
  }),
  H2: React.memo(({ className, children }) => {
    return (
      <h2 className={classNames(className, ' font-bold text-[48px] ', all)}>
        {children}
      </h2>
    );
  }),
  H3: React.memo(({ className, children }) => {
    return (
      <h3 className={classNames(className, ' font-bold text-[36px] ', all)}>
        {children}
      </h3>
    );
  }),
  SubH: React.memo(({ className, children }) => {
    return (
      <h4 className={classNames(className, ' text-[24px] font-semibold', all)}>
        {children}
      </h4>
    );
  }),
  Body1: React.memo(({ className, children }) => {
    return (
      <div className={classNames(className, ' text-[21px] font-medium ', all)}>
        {children}
      </div>
    );
  }),
  Body2: React.memo(({ className, children }) => {
    return (
      <div className={classNames(className, ' text-[18px] font-medium ', all)}>
        {children}
      </div>
    );
  }),
  Caption: React.memo(({ className, children }) => {
    return (
      <div className={classNames(className, ' text-[16px] font-medium ', all)}>
        {children}
      </div>
    );
  }),

  Caption2: React.memo(({ className, children }) => {
    return (
      <div className={classNames(className, ' text-[14px] font-medium ', all)}>
        {children}
      </div>
    );
  }),

  Caption3: React.memo(({ className, children }) => {
    return (
      <div className={classNames(className, ' text-[12px] font-medium ', all)}>
        {children}
      </div>
    );
  }),
};

export default Typography;
