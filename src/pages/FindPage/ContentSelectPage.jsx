import React, { useState } from 'react';
import Banner from '../../components/FindPage/Banner';
import FindPageWrapper from '../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import RoundButton from '../../components/FindPage/RoundButton';
import Title from '../../components/FindPage/Title';

const ContentSelectPage = () => {
  return (
    <MaxWidthWrapper>
      <Banner title={'밥 친구를 찾으러 가 볼까요?'}>
        <div>banner</div>
      </Banner>
      <FindPageWrapper step='3단계' prevLink='/' nextLink='/'>
        <Title>{'어떤 콘텐츠를 볼까요?'}</Title>
        <MaxWidthWrapper className='flex flex-wrap justify-between'>
          <RoundButton
            className='w-48 h-48 lg:w-56 lg:h-56'
            title='영상 콘텐츠'
          >
            {'영화, 드라마, 예능 프로그램, 다큐멘터리 등'}
          </RoundButton>
          <RoundButton
            className='w-48 h-48 lg:w-56 lg:h-56'
            title='텍스트 콘텐츠'
          >
            {'웹툰, 웹소설 등'}
          </RoundButton>
        </MaxWidthWrapper>
      </FindPageWrapper>
    </MaxWidthWrapper>
  );
};

export default ContentSelectPage;
