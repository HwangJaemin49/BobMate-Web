import React from "react";


export default function EmailFind() {
    return (
        <div className="signIn" style={{width: "600px", marginTop: "5%", display:"block", margin:"0px auto"}}>
            <p style={{textAlign: "center", fontSize: "30px"}}>이메일 찾기</p><br />
            <form style={{width: "600px", marginLeft: "120px"}}>
                <div style={{paddingBottom: "20px"}}>
                    <p>이름</p>
                    <input style={{width:"300px", height: "40px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="이름을 입력해 주세요"
                         />
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <p>휴대폰 번호</p>
                    <input style={{width:"300px", height: "40px", borderRadius: "5px", border: "2px solid #D9D9D9"}}
                        placeholder="휴대폰 번호를 입력해 주세요"
                         />
                        
                </div>
                <div style={{paddingBottom: "20px"}}>
                    <p>인증번호</p>
                    <input style={{width:"150px", height: "40px", borderRadius: "5px", border: "2px solid #D9D9D9", marginRight:"25px"}}
                        placeholder="인증번호 7자리"
                         />
                    <button type="button" style={{width: "120px", height: "40px", fontSize: "15px", borderRadius: "5px", backgroundColor: "white"}}>인증번호 받기</button>
                        
                </div>
            </form>

        </div>
    )

}