import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Title from '../../components/FindPage/Title';
import { MoonLoader } from 'react-spinners';

const LoadingScreen = ({ progress }) => {
  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center py-20 sm:py-30 '>
      <Title>밥 친구를 찾는 중...</Title>
      <MoonLoader className='mt-4' />
    </MaxWidthWrapper>
  );
};

export default LoadingScreen;
