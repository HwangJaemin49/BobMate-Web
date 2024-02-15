import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recommend from '../components/Recommend';
import retry from '../components/images/Retry.png';
import thumbup from '../components/images/thumbUP.png';
import thumbdown from '../components/images/thumbDOWN.png';
import button from '../components/images/button_home.png';
import axios from 'axios';
import ResultPageWrapper from '../components/FindPage/ResultPageWrapper';

export default function FindDone({ results }) {
  const accessToken = localStorage.getItem('accessToken');

  const [evaluations, setEvaluations] = useState({});

  const [content, setContent] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/members/edit`, {
          headers: {
            Authorization: accessToken,
          },
        });
        console.log(response.data);
        setContent(response.data.result);
      } catch (e) {
        console.log(e);
        const statusCode = e.response.status; // 400
        const statusText = e.response.statusText; // Bad Request
        const message = e.response.data.message; // id should not be empty
        console.log(`${statusCode} - ${statusText} - ${message}`);
    }
  }
  fetchData();
  },[accessToken]);

  const handleThumbClick = async (contentId, isGood) => {
    try {
      // 해당 컨텐츠에 대한 평가 상태 가져오기
      const existingEvaluation = evaluations[contentId];

      if (existingEvaluation !== undefined) {
        // 이미 평가가 있는 경우
        if (
          (isGood && existingEvaluation === true) ||
          (!isGood && existingEvaluation === false)
        ) {
          // 이미 같은 평가를 한 경우, 삭제 요청 보내기
          await axios.delete(`api/v1/evaluation/delete/${contentId}`, {
            headers: {
              Authorization: accessToken,
            },
          });
          alert('평가가 삭제되었습니다!');
          // 해당 컨텐츠의 평가 상태 업데이트 (평가 삭제)
          setEvaluations((prevState) => ({
            ...prevState,
            [contentId]: undefined,
          }));
        } else {
          // 다른 평가를 한 경우, 업데이트 요청 보내기
          await axios.patch(
            `api/v1/evaluation/update/${contentId}`,
            {
              contentId: contentId,
              good: isGood,
            },
            {
              headers: {
                Authorization: accessToken,
              },
            }
          );
          alert('평가가 수정되었습니다!');
          // 해당 컨텐츠의 평가 상태 업데이트 (평가 변경)
          setEvaluations((prevState) => ({
            ...prevState,
            [contentId]: isGood,
          }));
        }
      } else {
        // 평가가 없는 경우, 새로운 평가 생성 요청 보내기
        await axios.post(
          `api/v1/evaluation/create`,
          {
            contentId: contentId,
            good: isGood,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        alert('평가가 완료되었습니다!');
        // 해당 컨텐츠의 평가 상태 업데이트 (새로운 평가 생성)
        setEvaluations((prevState) => ({ ...prevState, [contentId]: isGood }));
      }
    } catch (error) {
      console.error('Error updating or deleting evaluation: ', error);
    }
  };

  return (
    <ResultPageWrapper style={{ fontFamily: 'Pretendard-SemiBold' }}>
      <div
        className='done'
        style={{
          backgroundColor: '#FFFDE5',
          height: '200px',
          textAlign: 'center',
          fontFamily: 'Pretendard-Bold',
          fontSize: '30px',
        }}
      >
        <div className='p' style={{ paddingTop: '70px' }}>
          밥 친구 찾기 완료!
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          textAlign: 'center',
          fontSize: '35px',
          fontFamily: 'Pretendard-Bold',
        }}
      >
        오늘의 밥 친구는?
      </div>
      <br />
      <br />
      <br />
      <Recommend results={results} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className='re'
        style={{
          fontFamily: "Pretendard-Bold",
          width: '180px',
          height: '40px',
          backgroundColor: '#FFD900',
          color: 'black',
          borderRadius: '10px',
          display: 'block',
          margin: '0px auto',
        }}
      >
        <img
          alt='다시 선택하기'
          src={retry}
          style={{
            float: 'left',
            paddingLeft: '26px',
            paddingTop: '7px',
            paddingRight: '5px',
          }}
        ></img>
        <Link to='/find'>
          <div style={{ paddingTop: '10px', fontSize: "17px" }}>다시 추천받기</div>
        </Link>
      </div>
      <br />
      <br />
      <div
        className='result-box'
        style={{
          textAlign: 'center',
          border: '2px solid',
          borderRadius: '10px',
          width: '500px',
          paddingTop: '30px',
          paddingBottom: '50px',
          marginLeft: '500px',
          fontFamily: "Pretendard-Bold",
          height: "300px"
        }}
      >
        <div className='result-text'>
          <h2>잠깐!</h2>
          <h2>추천 결과에 만족하시나요?</h2>
          <h3>{content.nickname}님의 평가가 더 나은 밥 친구를 만듭니다 :)</h3>
        </div>
        <br />
        <div
          className='result-rate'
          style={{ width: '250px', margin: '0 auto' }}
        >
          {results.map((content, index) => (
            <div key={index}>
              <p style={{ width: '300px' }}>
                {content.name}
                <img
                  alt='엄지 올린 사진'
                  src={thumbdown}
                  style={{
                    float: 'right',
                    marginRight: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleThumbClick(content.contentId, false)}
                />
                <img
                  alt='엄지 내린 사진'
                  src={thumbup}
                  style={{
                    float: 'right',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleThumbClick(content.contentId, true)}
                />
              </p>
              <br />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div
        className='home-button'
        style={{
          fontFamily: "Pretendard-Bold",
          width: '180px',
          height: '40px',
          backgroundColor: '#FFD900',
          color: 'black',
          borderRadius: '10px',
          display: 'block',
          margin: '0px auto',
        }}
      >
        <div
          style={{
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          <Link to='/' style={{}}>
            <img alt='홈 버튼' src={button} style={{ float: 'left',
            paddingLeft: '25px',
            paddingTop: '7px',
            paddingRight: '0px',}}></img>
            <div style={{paddingTop: '10px', fontSize: "17px", paddingRight: "10px"}}>홈으로 가기</div>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </ResultPageWrapper>
  );
}
