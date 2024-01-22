import React, { useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Banner from '../../components/FindPage/Banner';
import LoadingScreen from '../../screen/FindPage/LoadingScreen';
import AdvertiseBox from '../../containers/AdvertiseBox';

const FindResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);

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
