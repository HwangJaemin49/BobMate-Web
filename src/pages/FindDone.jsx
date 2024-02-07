import React from 'react';
import { Link } from 'react-router-dom';
import Recommend from '../components/Recommend';
import retry from '../components/images/Retry.png';
import thumbup from '../components/images/thumbUP.png';
import thumbdown from '../components/images/thumbDOWN.png';
import button from '../components/images/button_home.png';

export default function FindDone({ results }) {
  return (
    <div style={{fontFamily: "Pretendard-SemiBold"}}>
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
      <Recommend />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className='re'
        style={{
          width: '180px',
          height: '40px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '10px',
          display: 'block',
          margin: '0px auto',
        }}
      >
        <img
          src={retry}
          style={{
            float: 'left',
            paddingLeft: '30px',
            paddingTop: '7px',
            paddingRight: '5px',
          }}
        ></img>
        <div style={{ paddingTop: '10px' }}>다시 추천받기</div>
      </div>
      <br />
      <br />
      <div
        className='result-box'
        style={{
          textAlign: 'center',
          border: '2px solid',
          borderRadius: '10px',
          width: '700px',
          paddingTop: '30px',
          paddingBottom: '50px',
          marginLeft: '390px',
        }}
      >
        <div className='result-text'>
          <h2>잠깐!</h2>
          <h2>추천 결과에 만족하시나요?</h2>
          <h3>OOO님의 평가가 더 나은 밥 친구를 만듭니다 :)</h3>
        </div><br/>
        <div className='result-rate' style={{width: "250px", margin: "0 auto"}}>
        
          <p style={{width: "250px"}}>
            추천 결과 1
            <img src={thumbdown} style={{float: "right", marginRight: "20px"}}></img>
            <img
              src={thumbup}
              style={{ float: "right", marginRight: "10px" }}
            ></img>
            
          </p><br/>
          <p style={{width: "250px"}}>
            추천 결과 2{' '}
            <img src={thumbdown} style={{float: "right", marginRight: "20px"}}></img>
            <img
              src={thumbup}
              style={{ float: "right", marginRight: "10px" }}
            ></img>
            
          </p><br/>
          <p style={{width: "250px"}}>
            추천 결과 3{' '}
            <img src={thumbdown} style={{float: "right", marginRight: "20px"}}></img>
            <img
              src={thumbup}
              style={{ float: "right", marginRight: "10px" }}
            ></img>
            
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div
        className='home-button'
        style={{
          width: '180px',
          height: '40px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '10px',
          display: 'block',
          margin: '0px auto',
        }}
      >
        <div style={{ color: 'white', textDecoration: 'none', textAlign: "center" }}>
          <Link to='/' style={{ }}>
            <img
              src={button}
              style={{ margin: "0 auto" }}
            ></img>
            <span style={{}}>홈으로 돌아가기</span>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
