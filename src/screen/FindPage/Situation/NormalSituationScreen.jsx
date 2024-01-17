import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import RoundButton from '../../../components/FindPage/RoundButton';
import RoundBox from '../../../components/FindPage/Situation/RoundBox';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep, plusStep } from '../../../states/StepState';
import Typography from '../../../components/FindPage/Typography';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import {
  MoodTypes,
  SelectMember,
  setMood,
} from '../../../states/NormalSituationState';

const moodPerks = [
  { title: '기쁨', value: MoodTypes.joy },
  { title: '즐거움', value: MoodTypes.pleasure },
  { title: '슬픔', value: MoodTypes.sadness },
  { title: '우울', value: MoodTypes.depression },
  { title: '분노', value: MoodTypes.anger },
];

const NormalSituationPage = () => {
  const dispatch = useDispatch();
  const { mood, member } = useSelector((state) => {
    return state.NormalSituationState;
  });

  const onRoundButtonClick = useCallback(
    (e) => {
      const value = e.currentTarget.value;
      dispatch(setMood(value));
    },
    [dispatch]
  );

  const onRoundBoxClick = useCallback(
    (e) => {
      const value = parseInt(e.currentTarget.value);
      dispatch(SelectMember(value));
    },
    [dispatch]
  );

  const prevOnClick = useCallback(() => {
    dispatch(minusStep());
  }, [dispatch]);

  const nextOnClick = useCallback(() => {
    if (member.select < 0 || member.select > 3) {
      return;
    }
    if (Object.values(mood).every((item) => item === false)) {
      return;
    }
    dispatch(plusStep());
  }, [dispatch, member.select, mood]);

  return (
    <>
      <SituationTitle title='일반 상황'>
        당신의 감정, 식사 구성원을 고려한 상황을 직접 설명해주세요.
      </SituationTitle>
      <FindPageWrapper
        step='2단계'
        prevOnClick={prevOnClick}
        nextOnClick={nextOnClick}
        className='lg:px-60'
      >
        <Typography.H1>지금 당신의 기분을 선택해주세요!</Typography.H1>
        <section className='flex flex-wrap justify-center '>
          {moodPerks.map((item) => {
            return (
              <RoundButton
                key={item.title}
                title={item.title}
                isSelected={mood[item.value]}
                value={item.value}
                className=' lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
                onClick={onRoundButtonClick}
              />
            );
          })}
        </section>

        <Typography.H1 className='my-10 lg:my-20 md:my-20'>
          식사 구성원을 선택해주세요!
        </Typography.H1>

        <section className='grid grid-cols-1 mb-8 lg:grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-8 sm:gap-x-6 lg:gap-x-16 lg:gap-y-14'>
          {member.members.map((item, index) => {
            return (
              <RoundBox
                key={item}
                isSelected={index === member.select}
                className='w-40 lg:w-60 lg:h-30'
                value={index}
                onClick={onRoundBoxClick}
              >
                {item}
              </RoundBox>
            );
          })}
        </section>
      </FindPageWrapper>
    </>
  );
};

export default NormalSituationPage;
