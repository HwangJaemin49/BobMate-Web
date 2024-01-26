import React, { Component } from "react";

import bannerLogo from "../components/images/banner_bowl_rice.png";
import Ad from '../components/Ad';
import Footer from "../components/Footer";
import Content from "../components/Content";
import Introduce from "../components/Introduce";




export default function Home() {
    return (
      <div className="all">
        <div  className="mainBanner" style = {{textAlign: "center", height: "600px"}}>
            <div className="banner" style={{width: "350px", display: "block", margin: "0px auto", height: "200px", textAlign: "center", paddingTop: "100px"}}>
              <p style={{fontSize: "21px"}}>식사 상황별 콘텐츠 추천 서비스</p><br />
              <div style={{width: "300px", height: "150px", display: "block", margin: "0px auto"}}>
                <img className="bigBob" alt="bob" src={bannerLogo} style = {{float: "left"}}/>
                <p style={{fontSize: "70px"}}>밥 친구</p>
              </div>

            <div className="start-button" style={{width: "180px", height:"60px", backgroundColor:"#FFD900", borderRadius:"40px", fontSize:"20px", margin: "0px auto", display: "table"}}><p style={{display:"table-cell", verticalAlign:"middle"}}>시작하기</p></div><br /><br />
          </div>


        </div>
        <Introduce />
        <br /><Ad /><br />
        <div className="media-content" style={{fontSize:"30px", width: "1000px", display:"block", margin:"0px auto"}}>
          <div className="mainContent" style={{textAlign: "center", fontSize: "40px"}}>
          <br />✨ 지금 가장 핫한 콘텐츠!<br /><br />
          </div>
          <div className="videoBest" style={{fontSize:"25px"}}>
            <div className="videoTitle" style={{fontFamily:"Pretendard-Bold", fontSize: "35px"}}>영상 Best 3</div>
            <Content /><br /><br />
          </div>
          <div className="textBest" style={{fontSize:"25px"}}>
          <div className="textTitle" style={{fontFamily:"Pretendard-Bold", fontSize: "35px"}}>텍스트 Best 3</div>
            <Content />
          </div>
        </div>
        <br /><Ad /><br />
        <div className="food-content" style={{fontSize:"40px", textAlign:"center"}}>
          <br />🍚 오늘은 이 메뉴 어때요?<br /><br />
        </div>
        <div className="foodRecomendation" style={{width: "850px", display:"block", margin:"0px auto", height:"800px"}}>
          <div className="firstLine" style={{height: "320px", width: "850px"}}>
            <div className="breakfast" style={{float:"left", fontSize:"25px", paddingRight:"15px"}}>
                  아침
                  <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}></div>
                  <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
              </div>
              <div className="lunch" style={{display:"inline-block", fontSize:"25px"}}>
                점심
                <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}></div>
                <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
              </div>

          </div><br /><br />
          <div className="secondLine" style={{width:"850px", height: "300px"}}>
            <div className="dinner" style={{float:"left", fontSize:"25px", paddingRight:"15px"}}>
                저녁
                <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}></div>
                <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
            </div>
            <div className="others" style={{display:"inline-block", fontSize:"25px"}}>
              간식/야식
              <div className="foodImage" style={{width:"400px", height:"250px", backgroundColor:"#D9D9D9", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}></div>
              <div className="foodDescription" style={{fontSize: "20px"}}>텍스트 예시입니다.</div>
            </div>

          </div>

        </div>
        <Footer />
        
      </div>
      
    );
  }