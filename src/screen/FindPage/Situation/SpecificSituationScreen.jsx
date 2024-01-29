import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep, plusStep } from '../../../states/StepState';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import Typography from '../../../components/FindPage/Typography';
import classNames from 'classnames';
import { SelectSituation } from '../../../states/SpecificSituationState';
import SituationButton from '../../../components/FindPage/Situation/SituationButton';

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
        className='px-80 3xl:px-[462px]'
      >
        <Typography.H2 className='mb-20'>
          지금 당신의 기분을 선택해주세요!
        </Typography.H2>
        <div className='flex flex-col items-start w-full'>
          {situations.map((item, index) => {
            return (
              <SituationButton
                className={classNames(
                  { 'self-end': index % 2 !== 0 },
                  { 'mb-2': index !== 4 }
                )}
                key={item}
                isSelected={select === index}
                value={index}
                onClick={onClick}
              >
                {item}
              </SituationButton>
            );
          })}
        </div>
      </FindPageWrapper>
    </>
  );
};

export default SpecificSituationPage;
