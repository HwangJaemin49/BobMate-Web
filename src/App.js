import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FindMatePage from './pages/FindPage/FindMatePage';
import FindResultPage from './pages/FindPage/FindResultPage';
import ProfileEditPage from './components/MyPage/ProfileEditPage';
import MyPage from './components/MyPage/MyPage';
import Home from './pages/Home';
import Login from './pages/Login';
import KakaoLogin from './components/KakaoLogin';
// import NaverLogin from './components/NaverLogin';


function App() {
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedAccessTokenTimestamp = localStorage.getItem('accessTokenTimestamp');

    if (storedAccessToken && storedAccessTokenTimestamp) {
      const fiveHoursInMilliseconds = 5 * 60 * 60 * 1000;
      const storedTime = new Date(storedAccessTokenTimestamp).getTime();
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - storedTime;

      if (elapsedTime < fiveHoursInMilliseconds) {
        setAccessToken(storedAccessToken);
      } else {
        // 5시간이 지난 경우, 로컬 스토리지에서 accessToken 및 타임스탬프 삭제
        localStorage.removeItem('accessToken');
        localStorage.removeItem('accessTokenTimestamp');
      }
    }
  }, []);


  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <div id='wrapper'>
          <Header />
          <div id='main-content'>
            <Routes>
              <Route path='/' element={<Home accessToken={accessToken} />} />
              <Route path='/find' element={<FindMatePage />} />
              <Route path='/find-result' element={<FindResultPage />} />
              <Route path='/mypage' element={<MyPage accessToken={accessToken}/>} />
              <Route path='/profile' element={<ProfileEditPage accessToken={accessToken}/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/kakaoLogin' element={<KakaoLogin setAccessToken = {setAccessToken} />} />
              {/* <Route path='/naverLogin' element={<NaverLogin setAccessToken = {setAccessToken} />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
