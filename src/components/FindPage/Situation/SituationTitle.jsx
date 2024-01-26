import React from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import classNames from 'classnames';
import Typography from '../Typography';

const SituationTitle = ({ title, children }) => {
  return (
    <MaxWidthWrapper
      className={classNames(
        'px-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 2xl:px-96',
        'pb-2.5 pt-5 md:pt-10 md:pb-5',
        'flex flex-col items-start justify-between'
      )}
    >
      <Typography.H3 className='mb-3'>{title}</Typography.H3>
      <Typography.SubH className=''>{children}</Typography.SubH>
      <hr className='w-full mt-2 border-2 border-solid border-grayscale-800'></hr>
    </MaxWidthWrapper>
  );
};

export default React.memo(SituationTitle);
