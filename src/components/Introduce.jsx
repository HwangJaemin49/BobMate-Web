import React from 'react';
import leftQuotation from "./images/left_quotation.png";
import rightQuotation from "./images/right_quotation.png";
import slate from "./images/slate.png";
import happy from "./images/happy.png";
import film from "./images/film.png";
import cry from "./images/cry.png";
import book from "./images/book.png";
import explode from "./images/explode.png";

export default function Introduce() {
    return (
        <div className="explain-banner" style={{height: "500px", backgroundColor: "#FFFDE5"}}>
          <div className="service-explain" style={{width: "520px", float: "left", marginLeft: "140px", fontSize:"20px", marginTop: "40px"}}>
            <div className='quotations' style={{width: "340px"}}>
              <img src={leftQuotation} alt="따옴표" style={{marginBottom: "15px"}}></img>
              <p style={{paddingLeft: "40px", fontSize: "35px"}}>밥 먹을 때 이거 봐!</p>
              <img src={rightQuotation} alt="따옴표" style={{float: "right"}}></img>

            </div>
            <br /><br />
            <div style={{}}>
                "아, 밥 먹을 때 뭐 보지?"<br /><br />
                식사할 때 함께 볼 만한 콘텐츠를 고르느라 한참을 고민하셨나요?<br /><br />
                <p style={{fontFamily: "pretendard-bold"}}>이제 더 이상 고민하지 마세요!</p>
                <p style={{fontFamily: "pretendard-bold"}}><span style={{fontSize:"25px", fontFamily: 'Cafe24surround'}}>밥 친구</span>가 당신의 기분과 상황에 딱 맞는 콘텐츠를 찾아 드릴게요!</p>
            </div>
          </div>
          <div className="service-div" style={{width: "700px", float:"right", marginTop: "60px", marginRight: "30px", textAlign:"center", fontSize: "40px"}}>
            <div className="first-line" style={{}}>
              <div style={{width:"180px", height:"180px", backgroundColor: "#FFF595", float: "left", marginRight:"15px", marginBottom:"15px", display: "table", borderRadius: "40px", boxShadow: "3px 6px 5px lightgray", textAlign: "center"}}><img src={slate} alt="슬레이트 이모티콘" style={{display: 'block', margin: '0px auto', marginTop: "65px"}}></img></div>
              <div style={{width:"180px", height:"180px", backgroundColor: "#FFF595", float: "left", marginRight:"15px", marginBottom:"15px", display: "table", borderRadius: "40px", boxShadow: "3px 6px 5px lightgray"}}><img src={happy} alt="행복한 이모티콘" style={{display: 'block', margin: '0px auto', marginTop: "65px"}}></img></div>
              <div style={{width:"180px", height:"180px", backgroundColor: "#FFF595", float: "left", marginRight:"15px", marginBottom:"15px", display: "table", borderRadius: "40px", boxShadow: "3px 6px 5px lightgray"}}><img src = {film} alt="영화 필름 이모티콘" style={{display: 'block', margin: '0px auto', marginTop: "65px"}}></img></div>
            </div>
            <div className="second-line" style={{}}>
              <div style={{width:"180px", height:"180px", backgroundColor: "#FFF595", float: "left", marginRight:"15px", display: "table", borderRadius: "40px", boxShadow: "3px 6px 5px lightgray"}}><img src = {cry} alt="우는 이모티콘" style={{display: 'block', margin: '0px auto', marginTop: "65px"}}></img></div>
              <div style={{width:"180px", height:"180px", backgroundColor: "#FFF595", float: "left", marginRight:"15px", display: "table", borderRadius: "40px", boxShadow: "3px 6px 5px lightgray"}}><img src = {book} alt="책 이모티콘" style={{display: 'block', margin: '0px auto', marginTop: "65px"}}></img></div>
              <div style={{width:"180px", height:"180px", backgroundColor: "#FFF595", float: "left", marginRight:"15px", display: "table", borderRadius: "40px", boxShadow: "3px 6px 5px lightgray"}}><img src = {explode} alt="폭발하는 이모티콘" style={{display: 'block', margin: '0px auto', marginTop: "65px"}}></img></div>

            </div>
          </div>
    </div>

    )
    

}