import React from 'react';
import NaverLogo from './images/Naver.png';

const Naver = () => {
  const serverIp = process.env.REACT_SERVER_IP;

  const redirectUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/naverLogin'
      : `${serverIp}/naverLogin`;
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=xUNJVV_1pGBhygWCqKeW&redirect_uri=${redirectUrl}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <button
        onClick={NaverLogin}
        style={{
          backgroundColor: '#03C75A',
          width: '380px',
          height: '50px',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '130px',
          }}
        >
          <img src={NaverLogo} style={{ marginRight: '15px' }}></img>
          <span>네이버 로그인</span>
        </div>
      </button>
    </>
  );
};

export default Naver;
