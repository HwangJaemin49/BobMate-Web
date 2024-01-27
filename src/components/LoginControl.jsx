import React, { useState } from 'react';

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogoutClick}>로그아웃</button>
          <span>환영합니다!</span>
        </div>
      ) : (
        <div>
          <button onClick={handleLoginClick}>로그인</button>
          <span>로그인 해주세요!</span>
        </div>
      )}
    </div>
  );
  }

export default LoginControl;