import React from 'react'
import { useNavigate } from 'react-router-dom';
import arrow from './images/Arrow.png';
import './Content.css'

export default function Content(props) {
    const navigate = useNavigate();

    const onClickContent = () => {
        navigate(`/${props.title}`, {
            state: props,
        });
    };

    return (
        <div className='content-container' style={{margin: "10px auto", height: "350px", textAlign: "center"}} onClick={onClickContent}>
            <div className='first-container' style={{height:"350px", float: 'left', width:"30%"}}>
                <div className='title' style={{height:'30px', textAlign:'left', display: "flex", alignItems:"center", paddingTop: "10px"}}>
                    1. 영상 콘텐츠
                    <img src={arrow} style={{paddingLeft:'10px'}}></img>
                </div>
                <div className="content" style={{backgroundColor: "#D9D9D9", height:"300px", width:"340px", borderRadius: "30px", marginTop: "15px"}}>
                    <p style={{paddingTop:"250px", paddingLeft:"250px"}}>♡</p>
                </div>
            </div>
            
            <div className='second-container' style={{height:"350px", float: "left", marginLeft:"5%", width:"30%", boxSizing:"border-box", borderRadius: "30px"}} onClick={onClickContent}>
                <div className='title' style={{height:'30px', textAlign:'left', display: "flex", alignItems:"center", paddingTop: "10px"}}>
                    2. 영상 콘텐츠
                    <img src={arrow} style={{paddingLeft:'10px'}}></img>
                </div>
                <div className="content"  style={{backgroundColor: "#D9D9D9", height:"300px", width:"340px", borderRadius: "30px", marginTop: "15px"}}>
                    <p style={{paddingTop:"250px", paddingLeft:"250px"}}>♡</p>
                </div>
            </div>
            <div className='third-container' style={{height:"350px", float: "right", width:"30%", boxSizing:"border-box", borderRadius: "30px"}} onClick={onClickContent}>
                <div className='title' style={{height:'30px', textAlign:'left', display: "flex", alignItems:"center", paddingTop: "10px"}}>
                    3. 영상 콘텐츠
                    <img src={arrow} style={{paddingLeft:'10px'}}></img>
                </div>
                <div className="content"  style={{backgroundColor: "#D9D9D9", height:"300px", width:"340px", borderRadius: "30px", marginTop: "15px"}}>
                    <p style={{paddingTop:"250px", paddingLeft:"250px"}}>♡</p>
                </div>
            </div>

        </div>
        );
}