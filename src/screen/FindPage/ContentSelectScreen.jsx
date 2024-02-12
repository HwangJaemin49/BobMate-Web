import React, { useCallback } from 'react';
import FindPageWrapper from '../../components/FindPage/FindPageWrapper';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import RoundButton from '../../components/FindPage/RoundButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { minusStep } from '../../store/StepState';
import Typography from '../../components/FindPage/Typography';
import { TYPES, setContent } from '../../store/ContentState';

const ContentSelectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const content = useSelector((state) => {
    return state.ContentState.content;
  });

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
      <Typography.H2>{'어떤 콘텐츠를 볼까요?'}</Typography.H2>
      {/*3xl은 1920px 기준이며, 1920px-min-width로 하는 media query.
        3xl 기준대로 패딩을 잡으면, 노트북 화면에서는 화면이 이상하게 보여서 별도로 추가.
        */}
      <MaxWidthWrapper className='flex flex-wrap justify-between mt-[80px] px-[300px] 3xl:px-[540px]'>
        <RoundButton
          className='w-[330px] h-[330px]'
          onClick={onVideoContentClick}
          isSelected={content === TYPES.videoContent}
        >
          <Typography.H3>{'영상 콘텐츠'}</Typography.H3>
          <Typography.Body2>
            영화, 드라마, 예능 프로그램,
            <br />
            다큐멘터리 등
          </Typography.Body2>
        </RoundButton>
        <RoundButton
          className='w-[330px] h-[330px]'
          title='텍스트 콘텐츠'
          onClick={onTextContentClick}
          isSelected={content === TYPES.textContent}
        >
          <Typography.H3>{'텍스트 콘텐츠'}</Typography.H3>
          <Typography.Body2>{'웹툰, 웹소설 등'}</Typography.Body2>
        </RoundButton>
      </MaxWidthWrapper>
    </FindPageWrapper>
  );
};

export default ContentSelectPage;
