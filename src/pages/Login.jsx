import React from "react";
import {Link} from 'react-router-dom';
import KakaoLoginButton from "../components/KakaoLoginButton";
import NaverLoginButton from "../components/NaverLoginButton";


// export default function Login() {
//     return (
//         <div className="signIn" style={{width: "600px", display:"block", margin:"0px auto", marginTop: "5%"}}>
//             <p style={{textAlign: "center", fontSize: "30px"}}>로그인</p><br />
//             <form style={{width: "600px"}}>
//                 <div style={{paddingBottom: "20px"}}>
//                     <input style={{width:"300px", height: "40px", borderRadius: "5px", display:"block", margin:"0px auto", border: "2px solid #D9D9D9"}}
//                         placeholder="이메일을 입력해 주세요"
//                          />
//                 </div>
//                 <div style={{paddingBottom: "20px"}}>
//                     <input style={{width:"300px", height: "40px", borderRadius: "5px", display:"block", margin:"0px auto", border: "2px solid #D9D9D9"}}
//                         placeholder="비밀번호를 입력해 주세요"
//                          />
                        
//                 </div>
//             </form>
//             <button type="button" style={{width: "300px", height: "40px", backgroundColor: "#FFD900", borderRadius:"5px", display:"block", margin:"0px auto", border: "none", fontFamily: "Pretendard-Bold", fontSize: "15px"}}>이메일로 로그인</button>
//             <div className="sns-login" style={{width: "300px", height: "100px", display:"block", margin:"0px auto"}}>
//                 또는<br />
//                 sns 로그인 자리
//             </div>
//             <div className="account-find" style={{float: "right"}}>
//                 <Link to='/emailfind'>이메일 찾기 </Link>|<Link to='/pwfind'> 비밀번호 찾기</Link>
//             </div>

//         </div>
//     )

// }


export default function Login() {

    return(
    <div style={{textAlign:"center"}}>
        <div className="login" style={{marginTop: "100px"}}>
            <p style={{fontSize: "36px"}}>로그인</p><br /><br />
            <p style={{fontSize: "18px"}}>간편 로그인으로 바로 시작해 보세요!</p><br />
        
        </div>
        <NaverLoginButton /><br/><br/>
        <KakaoLoginButton />

    </div>
    )
}
