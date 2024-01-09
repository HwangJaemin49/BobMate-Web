import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Banner from '../../components/FindPage/Banner';
import LoadingScreen from '../../screen/FindPage/LoadingScreen';
import AdvertiseBox from '../../containers/AdvertiseBox';

const FindResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /**
     * 이 페이지에서는 항상 api호출.
     * api에 들어가는 데이터는 redux state에 저장되어 있고,
     * redux 데이터가 채워져 있지 않은 상황 ex) find-page로 바로 접속
     * 일 때는 오류 처리, 혹은 첫 페이지로 보내기
     */
  }, [isLoading]);

  return (
    <MaxWidthWrapper>
      <Banner
        className='pt-10 pb-10 md:pb-14'
        title={isLoading || '밥 친구 찾기 완료!'}
      >
        {isLoading && <AdvertiseBox />}
      </Banner>
      {isLoading ? <LoadingScreen /> : <FindResultPage />}
    </MaxWidthWrapper>
  );
};

export default FindResultPage;
