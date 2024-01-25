import React, { useCallback, useState } from 'react';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Banner from '../../components/FindPage/Banner';
import LoadingScreen from '../../screen/FindPage/LoadingScreen';
import FindResultScreen from '../../screen/FindPage/FindResultScreen';
import AdvertiseBox from '../../containers/AdvertiseBox';

const FindResultPage = () => {
  const [results, setResults] = useState([null, null, null]);
  const [isLoading, setIsLoading] = useState(true);

  const completeLoading = useCallback((results) => {
    setResults(results);
    setIsLoading(false);
  }, []);

  return (
    <MaxWidthWrapper>
      <Banner
        className='pt-10 pb-10 md:pb-14'
        title={isLoading || '밥 친구 찾기 완료!'}
      >
        {isLoading && <AdvertiseBox />}
      </Banner>
      {isLoading ? (
        <LoadingScreen completeLoading={completeLoading} />
      ) : (
        <FindResultScreen results={results} />
      )}
    </MaxWidthWrapper>
  );
};

export default FindResultPage;
