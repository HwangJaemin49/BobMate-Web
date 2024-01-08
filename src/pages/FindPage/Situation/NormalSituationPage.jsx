import React from 'react';
import Banner from '../../../components/FindPage/Banner';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';

const NormalSituationPage = () => {
  return (
    <MaxWidthWrapper>
      <Banner title={'밥 친구를 찾으러 가 볼까요?'}>
        <div>banner</div>
      </Banner>
      <FindPageWrapper step='2단계'>
        <div>sadf</div>
      </FindPageWrapper>
    </MaxWidthWrapper>
  );
};

export default NormalSituationPage;
