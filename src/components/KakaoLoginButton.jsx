import React from "react";
import Kakao from "./images/Kakao.png";


const SocialKakao = ()=>
{

    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=http://localhost:3000/kakaoLogin&response_type=code`;
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }

    return(
    <>
    <button onClick={handleLogin} style={{backgroundColor: "#FEE500", width: "380px", height: "50px", borderRadius: "10px"}}>
        <div style={{display: "flex", alignItems: "center", paddingLeft:"130px"}}>
            <img src={Kakao} style={{marginRight: "15px"}}></img>
            <span>카카오 로그인</span>
        </div>
    </button>
    </>
    )
}
export default SocialKakao