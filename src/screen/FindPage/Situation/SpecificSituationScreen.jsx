import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep, plusStep } from '../../../states/StepState';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import RoundSituation from '../../../components/FindPage/Situation/RoundSituation';
import Typography from '../../../components/FindPage/Typography';
import classNames from 'classnames';
import { SelectSituation } from '../../../states/SpecificSituationState';

const SpecificSituationPage = () => {
  const dispatch = useDispatch();
  const { select, situations } = useSelector((state) => {
    return state.SpecificSituationState;
  });

  const prevOnClick = useCallback(() => {
    dispatch(minusStep());
  }, [dispatch]);

  const nextOnClick = useCallback(() => {
    if (select >= 0 && select <= 3) {
      dispatch(plusStep());
    }
  }, [dispatch, select]);

  const onClick = useCallback(
    (e) => {
      const value = parseInt(e.currentTarget.value);
      dispatch(SelectSituation(value));
    },
    [dispatch]
  );

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
        <Typography.H2>지금 당신의 상황을 선택해주세요!</Typography.H2>
        <MaxWidthWrapper className='flex flex-col mt-4 mb-4'>
          {situations.map((item, index) => {
            return (
              <RoundSituation
                className={classNames({ 'self-end': index % 2 !== 0 })}
                key={item}
                isSelected={select === index}
                value={index}
                onClick={onClick}
              >
                {item}
              </RoundSituation>
            );
          })}
        </MaxWidthWrapper>
      </FindPageWrapper>
    </>
  );
};

export default SpecificSituationPage;
