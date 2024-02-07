import React from 'react';
import logo from './images/logo.png';
const center = "텍스트 예시입니다"

export default function Footer() {
  return (
    <div className='footer' style={{display:"block", margin:"0px auto", backgroundColor: "#F3F3F3", whiteSpace: "pre-wrap", height:"100px", textAlign:"center"}} >
        <div className='footer-content' style={{ width: "100%", paddingLeft: "20%", paddingTop: "10px"}}>
          <div className='footer-wrap-left' style={ {float: 'left', width:"200px", display: 'flex', alignItems: 'center', fontSize: '30px', marginLeft:"5%"}}>
            <img className="bob" alt="bob" src={logo} style={{paddingRight: '10px' }}/>
            <span style={{fontFamily: 'Cafe24surround'}}>밥친구</span>
          </div>
          <div className='footer-wrap-center' style={{float: "left", marginLeft:"5%", width:"200px", boxSizing:"border-box", fontSize:"13px"}}>
            소개<br />
            {center}<br />
            {center}<br />
            {center}
          </div>
          <div className='footer-wrap-right' style={{float: "left", width:"200px", boxSizing:"border-box", fontSize:"13px", marginLeft: "5%"}}>
              Contact<br />
              SNS<br />
              Copyright 2023. UMC all rights reserved
          </div>
        </div>
    </div>
  )
}