import React, { useCallback, useEffect, useMemo } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep, plusStep } from '../../../store/StepState';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import Typography from '../../../components/FindPage/Typography';
import classNames from 'classnames';
import {
  getSituation,
  specificStateActions,
  statusTypes,
} from '../../../store/SpecificSituationState';
import SituationButton from '../../../components/FindPage/Situation/SituationButton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SpecificSituationPage = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => {
    return state.SpecificSituationState.select;
  });
  const status = useSelector((state) => {
    return state.SpecificSituationState.situations.status;
  });
  const situations = useSelector((state) => {
    return state.SpecificSituationState.situations.data;
  });
  const error = useSelector((state) => {
    return state.SpecificSituationState.situations.error;
  });

  const isLoading = useMemo(
    () => status === statusTypes.loading || status === statusTypes.none,
    [status]
  );

  useEffect(() => {
    /**
     * 만약, situations의 값이 비어 있는 상태라면 초기화가 되었거나 한 상태이므로 다시 받아온다.
     */
    if (
      situations.every((value) => value === null) &&
      status === statusTypes.none
    ) {
      dispatch(getSituation());
    }
  }, [dispatch, situations, status]);

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
      dispatch(specificStateActions.selectSituation(value));
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
        <div className='flex flex-col items-start w-full gap-y-2'>
          {status === statusTypes.failed ? (
            <Typography.Body2 className='self-center'>{error}</Typography.Body2>
          ) : (
            situations.map((item, index) => {
              return (
                <SituationButton
                  className={classNames({ 'self-end': index % 2 !== 0 })}
                  key={index}
                  isSelected={select === index}
                  value={index}
                  onClick={onClick}
                  disabled={isLoading}
                >
                  {item ? (
                    item.sentence
                  ) : (
                    <Skeleton width='300px' height='30px' />
                  )}
                </SituationButton>
              );
            })
          )}
        </div>
      </FindPageWrapper>
    </>
  );
};

export default SpecificSituationPage;
