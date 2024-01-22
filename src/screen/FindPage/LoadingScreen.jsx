import React, { useCallback, useEffect } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { MoonLoader } from 'react-spinners';
import Typography from '../../components/FindPage/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TYPES as StepTYPES } from '../../states/StepState';

const LoadingScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const StepState = useSelector((state) => state.StepState);
  const NormalSituationState = useSelector(
    (state) => state.NormalSituationState
  );
  const SpecificSituationState = useSelector(
    (state) => state.SpecificSituationState
  );
  const ContentState = useSelector((state) => state.ContentState);

  const check = useCallback(async () => {
    if (!StepState.secondStep) {
      throw new Error('first page is not processed!');
    }

    if (StepState.secondStep === StepTYPES.normal) {
    } else {
    }

    if (!ContentState.content) {
      throw new Error('third page is not processed!');
    }
  }, [StepState, ContentState]);

  useEffect(() => {
    /**
     *
     * 이 페이지에서는 항상 api호출.
     * api에 들어가는 데이터는 redux state에 저장되어 있고,
     * redux 데이터가 채워져 있지 않은 상황 ex) find-page로 바로 접속
     * 일 때는 오류 처리, 혹은 첫 페이지로 보내기
     */
    const callCheck = async () => {
      try {
        await check();
        // call api
      } catch (err) {
        console.log(err.message);
        navigate('/find');
      }
    };

    callCheck();
  }, [navigate, dispatch, check]);

  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center py-20 sm:py-30 '>
      <Typography.H1>밥 친구를 찾는 중...</Typography.H1>
      <MoonLoader className='mt-4' />
    </MaxWidthWrapper>
  );
};

export default LoadingScreen;
