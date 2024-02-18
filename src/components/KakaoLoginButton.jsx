import React from "react";
import Kakao from "./images/Kakao.png";


const SocialKakao = ()=>
{

    
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=89811d2c9d52ab22379601480cd3a0ba&redirect_uri=http://43.202.23.75/kakaoLogin&response_type=code`;
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