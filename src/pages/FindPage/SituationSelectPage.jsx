import React, { useState } from 'react';
import Banner from '../../components/FindPage/Banner';
import FindPageWrapper from '../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import RoundButton from '../../components/FindPage/RoundButton';
import Title from '../../components/FindPage/Title';
import StepCircle from '../../components/FindPage/StepCircle';

const links = { normalLink: '/find/normal', specificLink: '/find/specific' };

const SituationPage = () => {
  const [nextLink, setNextLink] = useState(null);

  return (
    <MaxWidthWrapper>
      <Banner title={'밥 친구를 찾으러 가 볼까요?'}>
        <StepCircle step={1} />
      </Banner>
      <FindPageWrapper step='1단계' prevLink='/' nextLink={nextLink}>
        <Title>{'식사 상황을 선택해 주세요!'}</Title>
        <MaxWidthWrapper className='flex flex-wrap justify-between'>
          <RoundButton className='w-48 h-48 lg:w-56 lg:h-56' title='일반 상황'>
            {'내 상황을 직접 설명할께요'}
          </RoundButton>
          <RoundButton className='w-48 h-48 lg:w-56 lg:h-56' title='특정 상황'>
            {"'밥 친구'가 알려주는 상황으로 선택할께요"}
          </RoundButton>
        </MaxWidthWrapper>
      </FindPageWrapper>
    </MaxWidthWrapper>
  );
};

export default SituationPage;
