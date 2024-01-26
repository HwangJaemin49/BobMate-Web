import React from 'react';
import {Link} from 'react-router-dom';
import headerLogo from './images/bxs_bowl-rice.png';
import homeLogo from './images/ic_round-home.png';
import "./Header.css";

export default function Header() {
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
          <li>
            |
          </li>
          <li>
            <Link className='header-nav-item' to='/signup' style={{ color: 'black', textDecoration: "none" }} >
              회원 가입
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
