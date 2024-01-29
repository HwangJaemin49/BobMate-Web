import React, { useCallback } from 'react';
import FindPageWrapper from '../../../components/FindPage/FindPageWrapper';
import RoundButton from '../../../components/FindPage/RoundButton';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep, plusStep } from '../../../states/StepState';
import Typography from '../../../components/FindPage/Typography';
import SituationTitle from '../../../components/FindPage/Situation/SituationTitle';
import { selectMember, selectMood } from '../../../states/NormalSituationState';
import MemberBox from '../../../components/FindPage/Situation/MemberBox';
import classNames from 'classnames';

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
      >
        <Typography.H2 className='mb-20'>
          지금 당신의 기분을 선택해주세요!
        </Typography.H2>
        {[mood.moods.slice(0, 2), mood.moods.slice(2)].map((row, rowIndex) => (
          <section className='flex'>
            {row.map((item, index) => {
              const realIndex = index + rowIndex * 2;
              return (
                <RoundButton
                  key={item.key}
                  isSelected={realIndex === mood.select}
                  value={realIndex}
                  className={classNames('h-[228px] w-[228px] sm:mx-[90px]', {
                    'mt-10': rowIndex === 1,
                  })}
                  onClick={onRoundButtonClick}
                >
                  <Typography.H3>{item.icon}</Typography.H3>
                  <Typography.SubH>{item.content}</Typography.SubH>
                </RoundButton>
              );
            })}
          </section>
        ))}

        <Typography.H2 className='mb-20 my-[200px]'>
          식사 구성원을 선택해주세요!
        </Typography.H2>

        <section className='grid grid-cols-1 mb-8 lg:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6'>
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
