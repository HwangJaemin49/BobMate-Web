import React, { useEffect } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import NextButton from './NextButton';
import StepBox from './StepBox';
import classNames from 'classnames';
import scrollUp from '../../utils/scrollUp';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../services/Authorize';

const FindPageWrapper = ({
  children,
  step,
  prevOnClick,
  nextOnClick,
  className,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollUp();
  }, []);

  useEffect(() => {
    checkToken().then((result) => {
      if (!result) {
        window.alert('로그인이 필요합니다! 로그인창으로 이동합니다.');
        navigate('/login');
      }
    });
  }, [navigate]);

  return (
    <MaxWidthWrapper
      className={classNames(
        'pb-[240px] pt-[120px] flex flex-col items-center ',
        className
      )}
    >
      <StepBox className='mb-[40px]'>{step}</StepBox>
      {children}
      <div className='flex items-center justify-center mt-[120px]'>
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
