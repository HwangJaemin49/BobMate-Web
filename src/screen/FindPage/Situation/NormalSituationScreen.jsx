import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import RoundButton from '../../../components/FindPage/RoundButton';
import Title from '../../../components/FindPage/Title';
import RoundBox from '../../../components/FindPage/RoundBox';
import { useDispatch } from 'react-redux';
import {
  TYPES,
  minusStep,
  plusStep,
  setSecond,
} from '../../../states/StepState';

const NormalSituationPage = () => {
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
      <Title>지금 당신의 기분을 선택해주세요!</Title>
      <section className='flex flex-wrap-reverse justify-evenly '>
        <RoundButton
          title='기쁨'
          className='lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
        />
        <RoundButton
          title='즐거움'
          className='lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
        />
        <RoundButton
          title='슬픔'
          className='lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
        />
        <RoundButton
          title='우울'
          className='lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
        />
        <RoundButton
          title='분노'
          className='lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
        />
      </section>

      <Title className='my-10 lg:my-20 md:my-20'>
        식사 구성원을 선택해주세요!
      </Title>

      <section className='grid grid-cols-1 mb-8 lg:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-8 sm:gap-x-6 lg:gap-x-16 lg:gap-y-14'>
        <RoundBox title='혼자' className='w-40 lg:w-60 lg:h-30' />
        <RoundBox title='혼자' className='w-40 lg:w-60 lg:h-30' />
        <RoundBox title='혼자' className='w-40 lg:w-60 lg:h-30' />
        <RoundBox title='혼자' className='w-40 lg:w-60 lg:h-30' />
      </section>
    </FindPageWrapper>
  );
};

export default NormalSituationPage;
