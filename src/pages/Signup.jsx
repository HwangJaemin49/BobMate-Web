import React from "react";


export default function Signup() {
    return (
        <div className="signUp" style={{width: "600px", display:"block", margin:"0px auto", marginTop: "5%"}}>
            <p style={{textAlign: "center", fontSize: "30px"}}>회원 가입</p><br />
            <form style={{width: "600px"}}>
                <div style={{paddingBottom: "20px"}}>
                    <span style={{paddingRight: "100px"}}>닉네임</span>
                    <input style={{width:"300px", height: "30px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="사용하실 닉네임을 입력하세요."
                         />
                         <button type= "button" style={{marginLeft: "20px", backgroundColor: "white", width: "100px", borderRadius: "5px", border: "2px solid", height: "30px"}}>중복 확인</button>
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <span style={{paddingRight: "100px"}}>이메일</span>
                    <input style={{width:"300px", height: "30px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="예: bapchingu@bap.com"
                         />
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <span style={{paddingRight: "86px"}}>비밀번호</span>
                    <input style={{width:"300px", height: "30px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="비밀번호를 입력해 주세요"
                        />
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <span style={{paddingRight: "55px"}}>비밀번호 확인</span>
                    <input style={{width:"300px", height: "30px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="비밀번호를 한 번 더 입력해 주세요"
                        />
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <span style={{paddingRight: "100px"}}>휴대폰</span>
                    <input style={{width:"300px", height: "30px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="숫자만 입력해 주세요"
                        />
                        <button type= "button" style={{marginLeft: "20px", backgroundColor: "white", width: "100px", borderRadius: "5px", border: "2px solid", height: "30px"}}>인증번호 받기</button>
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <input style={{width:"300px", height: "30px", marginLeft: "140px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="인증번호를 입력해 주세요"
                        />
                        <button type= "button" style={{marginLeft: "20px", backgroundColor: "white", width: "100px", borderRadius: "5px", border: "2px solid", height: "30px"}}>인증번호 확인</button>
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <br />이용약관 동의
                    <div style={{float: "right", marginRight: "235px"}}>
                        <input type="checkbox"></input>
                        이용 약관 동의 <span style={{color: "gray"}}>(필수)</span><br />
                        <input type="checkbox"></input>
                        개인 정보 수집 • 이용 동의 <span style={{color: "gray"}}>(필수)</span><br />
                        <input type="checkbox"></input>
                        광고성 마케팅 수신 동의 <span style={{color: "gray"}}>(선택)</span>

                    </div>
                        
                </div>
            </form><br /><br /><br />
            <button type= "button" style={{display: "block", margin: "0px auto", backgroundColor: "#FFD900", width: "150px", borderRadius: "5px", height: "50px"}}>가입하기</button>

        </div>
    )

}