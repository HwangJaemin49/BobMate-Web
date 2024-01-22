import React, { useCallback, useEffect } from 'react';
import FindPageWrapper from '../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import RoundButton from '../../components/FindPage/RoundButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep } from '../../states/StepState';
import Typography from '../../components/FindPage/Typography';
import { TYPES, setContent } from '../../states/ContentState';

const ContentSelectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const content = useSelector((state) => {
    return state.ContentState.content;
  });

  useEffect(() => {
    dispatch(setContent(TYPES.nil));
  }, [dispatch]);

  const prevOnClick = useCallback(() => {
    dispatch(minusStep());
  }, [dispatch]);

  const nextOnClick = useCallback(() => {
    if (content) {
      navigate('/find-result');
    }
  }, [navigate, content]);

  const onVideoContentClick = useCallback(() => {
    dispatch(setContent(TYPES.videoContent));
  }, [dispatch]);

  const onTextContentClick = useCallback(() => {
    dispatch(setContent(TYPES.textContent));
  }, [dispatch]);

  return (
    <FindPageWrapper
      step='3단계'
      prevOnClick={prevOnClick}
      nextOnClick={nextOnClick}
    >
      <Typography.H1>{'어떤 콘텐츠를 볼까요?'}</Typography.H1>
      <MaxWidthWrapper className='flex flex-wrap justify-evenly'>
        <RoundButton
          className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
          title='영상 콘텐츠'
          onClick={onVideoContentClick}
          isSelected={content === TYPES.videoContent}
        >
          {'영화, 드라마, 예능 프로그램, 다큐멘터리 등'}
        </RoundButton>
        <RoundButton
          className='w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56'
          title='텍스트 콘텐츠'
          onClick={onTextContentClick}
          isSelected={content === TYPES.textContent}
        >
          {'웹툰, 웹소설 등'}
        </RoundButton>
      </MaxWidthWrapper>
    </FindPageWrapper>
  );
};

export default ContentSelectPage;
