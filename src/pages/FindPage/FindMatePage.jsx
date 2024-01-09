import React from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Banner from '../../components/FindPage/Banner';
import StepCircle from '../../components/FindPage/StepCircle';
import { useSelector } from 'react-redux';
import SituationSelectScreen from '../../screen/FindPage/SituationSelectScreen';
import ContentSelectScreen from '../../screen/FindPage/ContentSelectScreen';
import NormalSituationScreen from '../../screen/FindPage/Situation/NormalSituationScreen';
import SpecificSituationScreen from '../../screen/FindPage/Situation/SpecificSituationScreen';
import { TYPES } from '../../states/StepState';

const FindMatePage = () => {
  const { nowStep, secondStep } = useSelector((state) => {
    return state.StepState;
  });

  return (
    <MaxWidthWrapper>
      <Banner title={'밥 친구를 찾으러 가 볼까요?'}>
        <StepCircle step={nowStep} />
      </Banner>
      {nowStep === 1 && <SituationSelectScreen />}
      {nowStep === 2 &&
        (secondStep === TYPES.normal ? (
          <NormalSituationScreen />
        ) : (
          <SpecificSituationScreen />
        ))}
      {nowStep === 3 && <ContentSelectScreen />}
    </MaxWidthWrapper>
  );
};

export default FindMatePage;
