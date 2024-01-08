import React from 'react';
import Banner from '../../../components/FindPage/Banner';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import StepCircle from '../../../components/FindPage/StepCircle';

const SpecificSituationPage = () => {
  return (
    <MaxWidthWrapper>
      <Banner title={'밥 친구를 찾으러 가 볼까요?'}>
        <StepCircle step={2} />
      </Banner>
      <FindPageWrapper step='2단계'>
        <div>sadf</div>
      </FindPageWrapper>
    </MaxWidthWrapper>
  );
};

export default SpecificSituationPage;
