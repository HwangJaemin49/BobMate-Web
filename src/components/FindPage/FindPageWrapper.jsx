import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import NextButton from './NextButton';
import StepBox from './StepBox';

const FindPageWrapper = ({ children, step, prevOnClick, nextOnClick }) => {
  return (
    <MaxWidthWrapper className='px-10 mb-5 lg:mb-20 md:mb-10 md:px-20'>
      <div className='flex flex-col items-center'>
        <StepBox>{step}</StepBox>
        {children}
        <div className='flex items-center justify-center my-6'>
          <NextButton onClick={prevOnClick}>이전</NextButton>
          <NextButton onClick={nextOnClick}>다음</NextButton>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default FindPageWrapper;
