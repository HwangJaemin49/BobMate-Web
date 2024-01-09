import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Title from '../../components/FindPage/Title';

const LoadingScreen = () => {
  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center py-20 sm:py-40'>
      <Title>밥 친구를 찾는 중...</Title>
    </MaxWidthWrapper>
  );
};

export default LoadingScreen;
