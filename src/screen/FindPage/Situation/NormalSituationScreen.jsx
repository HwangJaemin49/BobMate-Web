import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import RoundButton from '../../../components/FindPage/RoundButton';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep, plusStep } from '../../../states/StepState';
import Typography from '../../../components/FindPage/Typography';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import { selectMember, selectMood } from '../../../states/NormalSituationState';
import MemberBox from '../../../components/FindPage/Situation/MemberBox';

const NormalSituationPage = () => {
  const dispatch = useDispatch();
  const { mood, member } = useSelector((state) => {
    return state.NormalSituationState;
  });

  const onRoundButtonClick = useCallback(
    (e) => {
      const value = parseInt(e.currentTarget.value);
      dispatch(selectMood(value));
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
    if (mood.select < 0 || mood.select > 4) {
      return;
    }
    if (member.select < 0 || member.select > 3) {
      return;
    }
    dispatch(plusStep());
  }, [dispatch, member.select, mood.select]);

  return (
    <>
      <SituationTitle title='일반 상황'>
        당신의 감정, 식사 구성원을 고려한 상황을 직접 설명해주세요.
      </SituationTitle>
      <FindPageWrapper
        step='2단계'
        prevOnClick={prevOnClick}
        nextOnClick={nextOnClick}
        className='px-60'
      >
        <Typography.H2>지금 당신의 기분을 선택해주세요!</Typography.H2>
        {[mood.moods.slice(0, 2), mood.moods.slice(2)].map((row, rowIndex) => (
          <section className='flex justify-around '>
            {row.map((item, index) => {
              const realIndex = index + rowIndex * 2;
              return (
                <RoundButton
                  key={item.key}
                  title={item.icon}
                  isSelected={realIndex === mood.select}
                  value={realIndex}
                  className='lg:mx-8 md:mx-6 h-[228px] w-[228px]'
                  onClick={onRoundButtonClick}
                >
                  {item.content}
                </RoundButton>
              );
            })}
          </section>
        ))}

        <Typography.H1 className='mb-10 my-28'>
          식사 구성원을 선택해주세요!
        </Typography.H1>

        <section className='grid grid-cols-1 mb-8 lg:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-4'>
          {member.members.map((item, index) => {
            return (
              <MemberBox
                key={item.content}
                isSelected={index === member.select}
                value={index}
                onClick={onRoundBoxClick}
                title={item.icon}
              >
                {item.content}
              </MemberBox>
            );
          })}
        </section>
      </FindPageWrapper>
    </>
  );
};

export default NormalSituationPage;
