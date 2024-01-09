import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import { useDispatch } from 'react-redux';
import {
  TYPES,
  minusStep,
  plusStep,
  setSecond,
} from '../../../states/StepState';

const SpecificSituationPage = () => {
  const dispatch = useDispatch();

  const prevOnClick = useCallback(() => {
    dispatch(minusStep());
    dispatch(setSecond(TYPES.nil));
  }, [dispatch]);

  const nextOnClick = useCallback(() => {
    dispatch(plusStep());
  }, [dispatch]);
  return (
    <FindPageWrapper
      step='2단계'
      prevOnClick={prevOnClick}
      nextOnClick={nextOnClick}
    >
      <div>sadf</div>
    </FindPageWrapper>
  );
};

export default SpecificSituationPage;
