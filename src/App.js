import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FindMatePage from './pages/FindPage/FindMatePage';
import FindResultPage from './pages/FindPage/FindResultPage';
import ProfileEditPage from './components/MyPage/ProfileEditPage';
import MyPage from './components/MyPage/MyPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EmailFind from './pages/EmailFind';
import PasswordFind from './pages/PasswordFind';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <div id='wrapper'>
          <Header />
          <div id='main-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/find' element={<FindMatePage />} />
              <Route path='/find-result' element={<FindResultPage />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/profile' element={<ProfileEditPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/emailfind' element={<EmailFind />} />
              <Route path='/pwfind' element={<PasswordFind />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
