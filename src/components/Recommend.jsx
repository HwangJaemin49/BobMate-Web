import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Content(props) {
    const navigate = useNavigate();

    const onClickContent = () => {
        navigate(`/${props.title}`, {
            state: props,
        });
    };

    return (
        <div className='content-container' style={{margin: "10px auto", height: "350px", textAlign: "center", width: "1000px", fontFamily: "Pretendard-SemiBold"}}>
            <div className='first-container' style={{height:"350px", float: 'left', width:"30%"}}>
                <div className="first" style={{backgroundColor: "#D9D9D9", height:"300px", width:"300px", borderRadius: "50%"}}></div>
                <div className='content-information' style={{height:'30px'}}><br />
                    <span style={{fontSize: "30px"}}>추천결과</span><br />
                    텍스트 예시입니다.
                </div><br />
                <div className='button' style={{width: "100px", border:"2px solid", fontSize:"20px", borderRadius:"10px", marginLeft:"90px", marginTop: "60px"}} onClick={onClickContent}>보러 가기</div>
            </div>
            
            <div className='second-container' style={{height:"350px", float: "left", marginLeft:"5%", width:"30%", boxSizing:"border-box", borderRadius: "30px"}}>
                <div className="second"  style={{backgroundColor: "#D9D9D9", height:"300px", width:"300px", borderRadius: "50%"}}></div>
                <div className='content-information' style={{height:'30px'}}><br />
                    <span style={{fontSize: "30px"}}>추천결과</span><br />
                    텍스트 예시입니다.
                </div><br/>
                <div className='button' style={{width: "100px", border:"2px solid", fontSize:"20px", borderRadius:"10px", marginLeft:"90px", marginTop: "60px"}} onClick={onClickContent}>보러 가기</div>
            </div>
            <div className='third-container' style={{height:"350px", float: "right", width:"30%", boxSizing:"border-box", borderRadius: "30px"}}>
                <div className="third"  style={{backgroundColor: "#D9D9D9", height:"300px", width:"300px", borderRadius: "50%"}}></div>
                <div className='content-information' style={{height:'30px'}}><br />
                    <span style={{fontSize: "30px"}}>추천결과</span><br />
                    텍스트 예시입니다.
                </div><br />
                <div className='button' style={{width: "100px", border:"2px solid", fontSize:"20px", borderRadius:"10px", marginLeft:"90px", marginTop: "60px"}} onClick={onClickContent}>보러 가기</div>
            </div>

        </div>
        );
}