import React, { useCallback } from 'react';
import FindPageWrapper from '../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import RoundButton from '../../components/FindPage/RoundButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES, plusStep, setSecond } from '../../states/StepState';
import Typography from '../../components/FindPage/Typography';

const SituationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /**
   * secondStep: 두번째 페이지가 특정상황인지, 일반 상황인지 기억해 두는 변수.
   * redux State에 저장되어 있음.
   */
  const secondStep = useSelector((state) => {
    return state.StepState.secondStep;
  });

  const prevOnClick = useCallback(() => {
    /*첫 페이지에서 메인 화면으로 넘어가게 된다면, Redux State의 secondStep을 초기화 함. */
    dispatch(setSecond(TYPES.nil));
    navigate('/');
  }, [navigate, dispatch]);

  const nextOnClick = useCallback(() => {
    /* 만약 secondStep이 null일 경우, 다음 페이지로 넘어가지 않음.*/
    if (secondStep) {
      dispatch(plusStep());
    }
  }, [dispatch, secondStep]);

  const onNormalSituationClick = useCallback(() => {
    dispatch(setSecond(TYPES.normal));
  }, [dispatch]);

  const onSpecificSituationClick = useCallback(() => {
    dispatch(setSecond(TYPES.specific));
  }, [dispatch]);

  return (
    <FindPageWrapper
      step='1단계'
      prevOnClick={prevOnClick}
      nextOnClick={nextOnClick}
    >
      <Typography.H1>{'식사 상황을 선택해 주세요!'}</Typography.H1>
      <MaxWidthWrapper className='flex flex-wrap justify-evenly'>
        <RoundButton
          className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
          title='일반 상황'
          onClick={onNormalSituationClick}
          isSelected={secondStep === TYPES.normal}
        >
          {'내 상황을 직접 설명할께요'}
        </RoundButton>
        <RoundButton
          className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
          title='특정 상황'
          onClick={onSpecificSituationClick}
          isSelected={secondStep === TYPES.specific}
        >
          {"'밥 친구'가 알려주는 상황으로 선택할께요"}
        </RoundButton>
      </MaxWidthWrapper>
    </FindPageWrapper>
  );
};

export default SituationPage;
