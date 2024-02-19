import React from "react";
import NaverLogo from "./images/Naver.png";


const Naver = () => {

    
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=xUNJVV_1pGBhygWCqKeW&redirect_uri=http://43.202.23.75/naverLogin`
    

    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    return (
    <>
    <button onClick={NaverLogin} style={{backgroundColor: "#03C75A", width: "380px", height: "50px", borderRadius: "10px"}}>
        <div style={{display: "flex", alignItems: "center", paddingLeft:"130px"}}>
            <img src={NaverLogo} style={{marginRight: "15px"}}></img>
            <span>네이버 로그인</span>
        </div>
    </button>
    </>
    )

};

export default Naver;