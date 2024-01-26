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
  selectMember,
  setMood,
} from '../../../states/NormalSituationState';

const moodPerks = [
  { content: '기쁨', title: '😊', value: MoodTypes.joy },
  { content: '즐거움', title: '😆', value: MoodTypes.pleasure },
  { content: '슬픔', title: '😢', value: MoodTypes.sadness },
  { content: '우울', title: '😔', value: MoodTypes.depression },
  { content: '분노', title: '😡', value: MoodTypes.anger },
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
      dispatch(selectMember(value));
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
        <Typography.H2>지금 당신의 기분을 선택해주세요!</Typography.H2>
        <section className='flex flex-wrap justify-center '>
          {moodPerks.map((item) => {
            return (
              <RoundButton
                key={item.content}
                title={item.title}
                isSelected={mood[item.value]}
                value={item.value}
                className='lg:mx-8 md:mx-6 h-36 w-36 lg:w-48 lg:h-48'
                onClick={onRoundButtonClick}
              >
                {item.content}
              </RoundButton>
            );
          })}
        </section>

        <Typography.H1 className='mb-10 my-28'>
          식사 구성원을 선택해주세요!
        </Typography.H1>

        <section className='grid grid-cols-1 mb-8 lg:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-4'>
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
