import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Dropdown from './Dropdown';
import headerLogo from './images/logo.png';
import homeLogo from './images/ic_round-home.png';
import "./Header.css";
import "./Dropdown";

export default function Header() {
  

  const accessToken = localStorage.getItem('accessToken');

  const [content, setContent] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/v1/members/edit`, {
                    headers: {
                        Authorization: accessToken
                    },
                });
                console.log(response.data);
                setContent(response.data.result);

            } catch (e) {
                console.log(e);
                const statusCode = e.response.status; // 400
                const statusText = e.response.statusText; // Bad Request
                const message = e.response.data.message; // id should not be empty
                console.log(`${statusCode} - ${statusText} - ${message}`);
            }
        }
        fetchData();
    },[accessToken]);
  


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
              <img src={content.profileImage} style={{width: "50px", height: "50px", borderRadius: "50%"}}></img>
              <div className='container'>
                <input id="dropdown" type='checkbox' />
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
