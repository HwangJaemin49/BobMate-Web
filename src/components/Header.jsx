import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from './Dropdown';
import headerLogo from './images/logo.png';
import homeLogo from './images/ic_round-home.png';
import './Header.css';
import './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store/tokenState';

export default function Header() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const accessToken = useSelector((state) => {
    return state.TokenState;
  });

  const [content, setContent] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (accessToken) {
          const response = await axios.get(`/api/v1/members/edit`, {
            headers: {
              Authorization: accessToken,
            },
          });
          setContent(response.data.result);
        } else {
          // navigate('/login');
        }
      } catch (e) {
        console.log(e);
        if (
          (e.response && e.response.status === 400) ||
          e?.response.status >= 500
        ) {
          // 400 오류일 경우(accessToken 만료) accessToken을 삭제하고 로그인 화면으로 리다이렉트
          // 500번대 오류일 경우(accessToken 변조) accessToken을 삭제하고 로그인 화면으로 리다이렉트
          localStorage.removeItem('accessToken');
          dispatch(deleteToken());
          // navigate('/login'); // 로그인 화면으로 리다이렉트
        } else {
          // 그 외의 오류는 콘솔에 출력
          const statusCode = e.response.status;
          const statusText = e.response.statusText;
          const message = e.response.data.message;
          console.log(`${statusCode} - ${statusText} - ${message}`);
        }
      }
    };
    fetchData();
  }, [accessToken, dispatch]);

  if (accessToken) {
    return (
      <div className='header-container' style={{ height: '88px' }}>
        <div className='header-wrap'>
          <div
            className='header-wrap-left'
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '30px',
              fontFamily: 'Cafe24surround',
            }}
          >
            <img
              className='bob'
              alt='bob'
              src={headerLogo}
              style={{ paddingRight: '10px' }}
            />
            밥 친구
          </div>
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '650px',
            }}
          >
            <li>
              <Link className='header-nav-item' to='/'>
                <img
                  className='home'
                  alt='home'
                  src={homeLogo}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '15px',
                  }}
                />
              </Link>
            </li>
            <img
              src={content.profileImage}
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              alt='프로필이미지'
            ></img>
            <div className='container'>
              <input id='dropdown' type='checkbox' />
              <label className='dropdownLabel' for='dropdown'>
                <div>{content.nickname} 님 ▾</div>
              </label>
              <div className='content'>
                <Dropdown />
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className='header-container' style={{ height: '88px' }}>
      <div className='header-wrap'>
        <div
          className='header-wrap-left'
          style={{ display: 'flex', alignItems: 'center', fontSize: '30px', fontFamily: 'Cafe24surround', }}
        >
          <img
            className='bob'
            alt='bob'
            src={headerLogo}
            style={{ paddingRight: '10px' }}
            
          />
          밥 친구
        </div>
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '650px',
          }}
        >
          <li>
            <Link className='header-nav-item' to='/'>
              <img
                className='home'
                alt='home'
                src={homeLogo}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '15px',
                }}
              />
            </Link>
          </li>
          <li>
            <Link
              className='header-nav-item'
              to='/login'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              로그인
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
