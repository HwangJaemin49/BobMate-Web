import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NaverLogin({ setAccessToken }) {
  const navigate = useNavigate();
  const PARAMS = new URL(document.location).searchParams;
  const NAVER_CODE = PARAMS.get('code');
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  const getAccessToken = async () => {
    if (accessTokenFetching || !NAVER_CODE) return;

    console.log('getAccessToken 호출');

    try {
      setAccessTokenFetching(true);

      const response = await axios.post(
        `/api/v1/auth/naver`,
        {
          authorizationCode: `${NAVER_CODE}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const accessToken = response.data.result.accessToken;
      localStorage.setItem('accessToken', accessToken); // 로컬 스토리지에 accessToken 저장
      setAccessToken(accessToken);
      console.log(response);

      setAccessTokenFetching(false);
      navigate('/');
    } catch (error) {
      console.error('Error ', error);
    } finally {
      setAccessTokenFetching(false);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, [NAVER_CODE, setAccessToken]);

  return <div>Loading...</div>;
}

export default NaverLogin;
