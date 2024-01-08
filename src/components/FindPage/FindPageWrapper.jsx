import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import NextButton from './NextButton';
import StepBox from './StepBox';

const FindPageWrapper = ({ children, step, prevLink, nextLink }) => {
  return (
    <MaxWidthWrapper className='px-10 my-auto md:px-60'>
      <div className='flex flex-col items-center'>
        <StepBox>{step}</StepBox>
        {children}
        <div className='flex items-center justify-center my-6'>
          <NextButton link={prevLink}>이전</NextButton>
          <NextButton link={nextLink}>다음</NextButton>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default FindPageWrapper;
