import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/tokenState';

function KakaoLogin({ setAccessToken }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const PARAMS = new URL(document.location).searchParams;
  const KAKAO_CODE = PARAMS.get('code');
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  const getAccessToken = async () => {
    if (accessTokenFetching || !KAKAO_CODE) return;
    try {
      setAccessTokenFetching(true);

      const response = await axios.post(
        `http://43.202.23.75/api/v1/auth/kakao`,
        {
          authorizationCode: `${KAKAO_CODE}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const accessToken = response.data.result.accessToken;
      localStorage.setItem('accessToken', accessToken);
      setAccessToken(accessToken);
      dispatch(setToken(accessToken));

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
  }, [KAKAO_CODE, setAccessToken]);

}

export default KakaoLogin;