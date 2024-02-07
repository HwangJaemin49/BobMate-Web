import React, { useCallback, useEffect, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Typography from '../../components/FindPage/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TYPES as StepTYPES, TYPES, endStep } from '../../store/StepState';
import { LogoIcon } from '../../components/Icons/LogoIcon';
import Banner from '../../components/FindPage/Banner';
import AdvertiseBox from '../../containers/AdvertiseBox';
import { normalRecommendApi } from '../../services/FindPage/Recommend';
import ResultPageWrapper from '../../components/FindPage/ResultPageWrapper';

const LoadingScreen = ({ completeLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* get states */
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
      if (
        NormalSituationState.mood.select === -1 ||
        NormalSituationState.member.select === -1
      ) {
        throw new Error('second page is not processed!');
      }
    } else if (StepState.secondStep === StepTYPES.specific) {
    }

    if (!ContentState.content) {
      throw new Error('third page is not processed!');
    }

    /* eslint-disable-next-line */
  }, [
    StepState,
    NormalSituationState,
    SpecificSituationState,
    ContentState,
    dispatch,
  ]);

  const getResult = useCallback(async () => {
    let results = null;
    const contentType = ContentState.content;

    if (StepState.secondStep === TYPES.normal) {
      const { mood, member } = NormalSituationState;
      const emotion = mood.moods[mood.select].key;
      const withWhom = member.members[member.select].key;
      results = await normalRecommendApi({ emotion, withWhom, contentType });
    } else if (StepState.secondStep === TYPES.specific) {
      results = ['none', 'none', 'none'];
    }

    return results;
    /* eslint-disable-next-line */
  }, [StepState, NormalSituationState, SpecificSituationState, ContentState]);

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
  }, [navigate, check]);

  useEffect(() => {
    /**
     * 이 페이지에서는 항상 api호출.
     * api에 들어가는 데이터는 redux state에 저장되어 있고,
     * redux 데이터가 채워져 있지 않은 상황 ex) find-page로 바로 접속
     * 일 때는 오류 처리, 혹은 첫 페이지로 보내기
     */

    const waitingTime = 3000; // 3초
    const callApi = async () => {
      try {
        const startTime = Date.now();
        const result = await getResult(); // call api
        const endTime = Date.now();

        // API 호출이 3초 이상 걸렸는지 확인
        const elapsedTime = endTime - startTime;
        if (elapsedTime < waitingTime) {
          // 3초 전에 API 호출이 완료된 경우, 남은 시간만큼 대기
          await new Promise((resolve) =>
            setTimeout(resolve, waitingTime - elapsedTime)
          );
        }
        console.log(`api 호출 완료!`);
        console.log(result);
        completeLoading(result);
      } catch (err) {
        // 오류 처리 필요
        console.log(err.message);
        window.alert(err.message);
      }
    };

    if (isChecked) {
      callApi();
    }
  }, [isChecked, completeLoading, getResult]);

  return (
    <ResultPageWrapper>
      <Banner>
        <AdvertiseBox />
      </Banner>
      <MaxWidthWrapper className='flex flex-col items-center justify-center pt-[200px] pb-[240px]'>
        <LogoIcon width='85' height='80' />
        <Typography.H3 className='my-10'>
          내게 딱 맞는 밥 친구를
          <br /> 찾고 있어요!
        </Typography.H3>
        <Typography.Body2>잠시만 기다려주세요! :&#41;</Typography.Body2>
      </MaxWidthWrapper>
    </ResultPageWrapper>
  );
};

export default LoadingScreen;
