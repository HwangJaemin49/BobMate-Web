import React from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import classNames from 'classnames';
import Typography from '../Typography';

const SituationTitle = ({ title, children }) => {
  return (
    <MaxWidthWrapper
      className={classNames(
        '3xl:px-[360px] px-[240px]',
        'flex flex-col items-start justify-between',
        'mt-[80px]'
      )}
    >
      <Typography.H3 className='mb-[25px]'>{title}</Typography.H3>
      <Typography.SubH className='mb-[24px]'>{children}</Typography.SubH>
      <hr className='w-full border-t-2 border-solid border-grayscale-800'></hr>
    </MaxWidthWrapper>
  );
};

export default React.memo(SituationTitle);
