import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import { useDispatch } from 'react-redux';
import {
  TYPES,
  minusStep,
  plusStep,
  setSecond,
} from '../../../states/StepState';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import Title from '../../../components/FindPage/Title';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import RoundSituation from '../../../components/FindPage/Situation/RoundSituation';

const SpecificSituationPage = () => {
  const dispatch = useDispatch();

  const prevOnClick = useCallback(() => {
    dispatch(minusStep());
    dispatch(setSecond(TYPES.nil));
  }, [dispatch]);

  const nextOnClick = useCallback(() => {
    dispatch(plusStep());
  }, [dispatch]);
  return (
    <>
      <SituationTitle title='특정 상황'>
        '밥 친구'가 제공하는 구체적인 예시 상황 4가지 중 하나를 선택해주세요.
      </SituationTitle>
      <FindPageWrapper
        step='2단계'
        prevOnClick={prevOnClick}
        nextOnClick={nextOnClick}
        className='flex flex-col items-center'
      >
        <Title>지금 당신의 상황을 선택해주세요!</Title>
        <MaxWidthWrapper className='flex flex-col mt-4 mb-4'>
          <RoundSituation className='self-start'>
            비 오늘 날 혼술하는 중
          </RoundSituation>
          <RoundSituation className='self-end'>
            너무 짜증나서 야식먹는 중
          </RoundSituation>
          <RoundSituation className='self-start'>
            자취방에서 친구들과 치킨 먹는중
          </RoundSituation>
          <RoundSituation className='self-end'>
            시험 기간 기념 떡볶이 먹는 중
          </RoundSituation>
        </MaxWidthWrapper>
      </FindPageWrapper>
    </>
  );
};

export default SpecificSituationPage;
