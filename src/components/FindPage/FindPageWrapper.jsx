import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import NextButton from './NextButton';
import StepBox from './StepBox';
import classNames from 'classnames';

const FindPageWrapper = ({
  children,
  step,
  prevOnClick,
  nextOnClick,
  className,
}) => {
  return (
    <MaxWidthWrapper
      className={classNames(
        'pb-[240px] pt-[120px] flex flex-col items-center',
        className
      )}
    >
      <StepBox className='mb-[40px]'>{step}</StepBox>
      {children}
      <div className='flex items-center justify-center my-[120px]'>
        <NextButton className='bg-grayscale-100' onClick={prevOnClick}>
          이전
        </NextButton>
        <NextButton className='bg-yellow-600' onClick={nextOnClick}>
          다음
        </NextButton>
      </div>
    </MaxWidthWrapper>
  );
};

export default FindPageWrapper;
