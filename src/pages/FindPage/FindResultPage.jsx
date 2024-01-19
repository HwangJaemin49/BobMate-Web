import React, { useCallback, useEffect, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Banner from '../../components/FindPage/Banner';
import LoadingScreen from '../../screen/FindPage/LoadingScreen';
import AdvertiseBox from '../../containers/AdvertiseBox';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TYPES as StepTYPES } from '../../states/StepState';

const FindResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const {
    StepState,
    NormalSituationState,
    SpecificSituationState,
    ContentState,
  } = useSelector((state) => {
    return state;
  });

  const stepCheck = async () => {
    const secondStep = StepState.secondStep;
    if (!secondStep) {
      throw new Error('first page is not processed!');
    }
  };

  const situationCheck = () => {
    // 나중에 비동기화 작업 후 수정
    const secondStep = StepState.secondStep;
    return secondStep === StepTYPES.normal
      ? () => {
          return true;
        }
      : () => {
          return true;
        };
  };
  const contentCheck = () => {
    const content = ContentState.content;
    if (!content) {
      throw new Error('third page is not processed!');
    }
  };

  useEffect(() => {
    /**
     *
     * 이 페이지에서는 항상 api호출.
     * api에 들어가는 데이터는 redux state에 저장되어 있고,
     * redux 데이터가 채워져 있지 않은 상황 ex) find-page로 바로 접속
     * 일 때는 오류 처리, 혹은 첫 페이지로 보내기
     */
    stepCheck()
      .then(situationCheck())
      .then(contentCheck)
      .catch((error) => {
        navigate('/find');
      });
    try {
    } catch (err) {
    } finally {
      // 전부 다 초기화
    }
  }, [isLoading, navigate]);

  return (
    <MaxWidthWrapper>
      <Banner
        className='pt-10 pb-10 md:pb-12'
        title={isLoading || '밥 친구 찾기 완료!'}
      >
        {isLoading && <AdvertiseBox />}
      </Banner>
      {isLoading ? <LoadingScreen /> : <FindResultPage />}
    </MaxWidthWrapper>
  );
};

export default FindResultPage;
