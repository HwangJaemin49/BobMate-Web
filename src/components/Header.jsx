import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import headerLogo from './images/logo.png';
import homeLogo from './images/ic_round-home.png';
import "./Header.css";
import "./Dropdown";
import Dropdown from './Dropdown';

export default function Header({accessToken}) {
  

  const [is_login, setIsLogin] = useState(true);
  const [view, setView] = useState(false);


  if(accessToken) {
    return (
      <div className='header-container' style = {{height: '88px'}} >
          <div className='header-wrap'>

            <div className='header-wrap-left' style={ {display: 'flex', alignItems: 'center', fontSize: '30px', fontFamily: 'Cafe24surround'}}>
              <img className="bob" alt="bob" src={headerLogo} style={{paddingRight: '10px' }}/>
              밥 친구
            </div>
            <ul style={ {display: 'flex', alignItems: 'center', paddingLeft: '650px' }} >
              <li>
                <Link className='header-nav-item' to="/">
                  <img className="home" alt="home" src={homeLogo} style={{display: 'flex', alignItems: 'center', paddingRight: '15px'}}/>
                </Link>
              </li>
              <div className='container'>
                <input id="dropdown" type='checkbox' />
                <label className='dropdownLabel' for='dropdown'>
                  <div>ooo 님 ▾</div>
                </label>
                <div className='content'>
                  <Dropdown />
                </div>
              </div>
              <li>
              |
              </li>
              <li>
                <Link className='header-nav-item' to='/' style={{ color: 'black', textDecoration: "none" }} >
                로그아웃
                </Link>
              </li>
            </ul>
          </div>

        </div>
    );
  };

  return (
    <div className='header-container' style = {{height: '88px'}} >
      <div className='header-wrap'>
        <div className='header-wrap-left' style={ {display: 'flex', alignItems: 'center', fontSize: '30px'}}>
          <img className="bob" alt="bob" src={headerLogo} style={{paddingRight: '10px' }}/>
          밥 친구
        </div>
        <ul style={ {display: 'flex', alignItems: 'center', paddingLeft: '650px' }} >
          <li>
            <Link className='header-nav-item' to="/">
              <img className="home" alt="home" src={homeLogo} style={{display: 'flex', alignItems: 'center', paddingRight: '15px'}}/>
            </Link>
          </li>
          <li>
            <Link className='header-nav-item' to='/login' style={{ color: 'black', textDecoration: "none" }} >
              로그인
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
