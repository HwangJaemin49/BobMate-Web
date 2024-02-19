import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FindMatePage from './pages/FindPage/FindMatePage';
import FindResultPage from './pages/FindPage/FindResultPage';
import ProfileEditPage from './components/MyPage/ProfileEditPage';
import MyPage from './components/MyPage/MyPage';
import Home from './pages/Home';
import Login from './pages/Login';
import KakaoLogin from './components/KakaoLogin';
import NaverLogin from './components/NaverLogin';
import Footer2 from './components/Footer2';
import bannerLogo from './components/images/biglogo.png'

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    // 스플래시 페이지를 3초 후에 숨김
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // 컴포넌트가 unmount 될 때 clearTimeout을 호출하여 메모리 누수를 방지
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    // 페이지가 로드될 때 로컬 스토리지에서 accessToken 가져오기
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <div id='wrapper'>
          {showSplash ? (
            <div className='splash-screen'>
              <div className='mainBanner' style={{ textAlign: 'left', fontFamily: 'Cafe24surround'}}>

                <div
                  className='banner'
                  style={{
                    width: '350px',
                    display: 'block',
                    margin: '0px auto',
                    height: '200px',
                    paddingTop: '200px',

                  }}
                >
                  <img
                      className='bigBob'
                      alt='bob'
                      src={bannerLogo}
                      style={{ float: 'left', marginTop: "32px", marginRight: "20px"}}
                    />
                  <br />
                  <div
                    style={{
                      width: '250px',
                      height: '150px',
                      display: 'block',
                      margin: '0px auto',
                    }}
                  >
                    <p style={{ fontSize: '24px' }}>Bob Mate</p>
                    <p style={{ fontSize: '48px' }}>
                      밥 친구
                    </p>
                  </div>
                  <br />
                  <br />
            </div>
          </div>
            </div>
          ) : (
            <>
            <Header />
          <div id='main-content'>
            <Routes>
              <Route path='/' element={<Home accessToken={accessToken} />} />
              <Route path='/find' element={<FindMatePage />} />
              <Route path='/find-result' element={<FindResultPage />} />
              <Route
                path='/mypage'
                element={<MyPage accessToken={accessToken} />}
              />
              <Route
                path='/profile'
                element={<ProfileEditPage accessToken={accessToken} />}
              />
              <Route path='/login' element={<Login />} />
              <Route
                path='/kakaoLogin'
                element={<KakaoLogin setAccessToken={setAccessToken} />}
              />
              <Route
                path='/naverLogin'
                element={<NaverLogin setAccessToken={setAccessToken} />}
              />
            </Routes>
          </div>
          <Footer2 />
          </>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
