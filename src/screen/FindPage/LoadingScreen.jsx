import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { MoonLoader } from 'react-spinners';
import Typography from '../../components/FindPage/Typography';

const LoadingScreen = ({ progress }) => {
  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center py-20 sm:py-30 '>
      <Typography.H1>밥 친구를 찾는 중...</Typography.H1>
      <MoonLoader className='mt-4' />
    </MaxWidthWrapper>
  );
};

export default LoadingScreen;
