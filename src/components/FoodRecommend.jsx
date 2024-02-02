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
        <div className="foodRecomendation" style={{width: "850px", display:"block", margin:"0px auto", height:"800px"}}>
          <div className="firstLine" style={{height: "320px", width: "850px"}}>
            <div className="breakfast" style={{float:"left", fontSize:"25px", paddingRight:"15px"}}>
                  아침
                  <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}>
                    <p style={{paddingTop:"200px", paddingLeft:"350px"}}>♡</p>
                  </div>
                  <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
              </div>
              <div className="lunch" style={{display:"inline-block", fontSize:"25px"}}>
                점심
                <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}>
                  <p style={{paddingTop:"200px", paddingLeft:"350px"}}>♡</p>
                </div>
                <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
              </div>

          </div><br /><br />
          <div className="secondLine" style={{width:"850px", height: "300px"}}>
            <div className="dinner" style={{float:"left", fontSize:"25px", paddingRight:"15px"}}>
                저녁
                <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}>
                  <p style={{paddingTop:"200px", paddingLeft:"350px"}}>♡</p>
                </div>
                <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
            </div>
            <div className="others" style={{display:"inline-block", fontSize:"25px"}}>
              간식/야식
              <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}>
                <p style={{paddingTop:"200px", paddingLeft:"350px"}}>♡</p>
              </div>
              <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
            </div>

          </div>

        </div>
        );
}