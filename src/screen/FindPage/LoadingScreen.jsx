import React, { useCallback, useEffect, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { MoonLoader } from 'react-spinners';
import Typography from '../../components/FindPage/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TYPES as StepTYPES, endStep } from '../../states/StepState';

const LoadingScreen = ({ completeLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* states */
  const StepState = useSelector((state) => state.StepState);
  const NormalSituationState = useSelector(
    (state) => state.NormalSituationState
  );
  const SpecificSituationState = useSelector(
    (state) => state.SpecificSituationState
  );
  const ContentState = useSelector((state) => state.ContentState);

  /**
   *  만약 redux state들에 있는 값들이 정상적이라면, true로 설정되는 state
   * */
  const [isChecked, setIsChecked] = useState(false);

  const check = useCallback(async () => {
    if (StepState.nowStep !== 4) {
      dispatch(endStep());
    }

    if (!StepState.secondStep) {
      throw new Error('first page is not processed!');
    }

    if (StepState.secondStep === StepTYPES.normal) {
    } else {
    }

    if (!ContentState.content) {
      throw new Error('third page is not processed!');
    }
  }, [
    StepState,
    NormalSituationState,
    SpecificSituationState,
    ContentState,
    dispatch,
  ]);

  useEffect(() => {
    const callCheck = async () => {
      try {
        await check();
        setIsChecked(true);
      } catch (err) {
        console.log(err.message);
        navigate('/find');
      }
    };

    callCheck();
  }, [dispatch, navigate, check]);

  useEffect(() => {
    const tempApi = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('temp api called!');
          resolve();
        }, 3000);
      });
    };

    /**
     *
     * 이 페이지에서는 항상 api호출.
     * api에 들어가는 데이터는 redux state에 저장되어 있고,
     * redux 데이터가 채워져 있지 않은 상황 ex) find-page로 바로 접속
     * 일 때는 오류 처리, 혹은 첫 페이지로 보내기
     */

    const callApi = async () => {
      try {
        await tempApi(); // call api
        completeLoading(['temp', 'temp', 'temp']);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (isChecked) {
      callApi();
    }
  }, [isChecked, dispatch, completeLoading]);

  return (
    <MaxWidthWrapper className='flex flex-col items-center justify-center py-20 sm:py-30 '>
      <Typography.H1>밥 친구를 찾는 중...</Typography.H1>
      <MoonLoader className='mt-4' />
    </MaxWidthWrapper>
  );
};

export default LoadingScreen;
