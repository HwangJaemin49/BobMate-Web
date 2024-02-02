import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import arrow from './images/Arrow.png';
import axios from 'axios';


function setArray() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        num: i
      });
    }
    return array;
  }

export default function Content(props) {
    const navigate = useNavigate();

    const [isWishAdd, setIsWishAdd] = useState(false);
    const [wishCount, setWishCount] = useState(808);

    const wishAddHandler = () => {
        setIsWishAdd(!isWishAdd)
    }

    const wishCountHandler = () => {
            axios({
                method:'get',
                url: 'http://43.202.23.75/api/v1/likes/content'

            })
            .then((result) => {
                console.log('요청성공')
                console.log(result)
                setArray(result.data)
            })
            .catch((error)=>{console.log('요청실패')
            console.log(error)
        })
    }

    const onClickContent = () => {
        navigate(`/${props.title}`, {
            state: props,
        });
    };

    return (
        <div className='content-container' style={{margin: "10px auto", height: "350px", textAlign: "center"}} >
            <div className='first-container' style={{height:"350px", float: 'left', width:"30%"}}>
                <div className='title' style={{height:'30px', textAlign:'left', display: "flex", alignItems:"center", paddingTop: "10px"}}>
                    1. 영상 콘텐츠
                    <img src={arrow} style={{paddingLeft:'10px'}}></img>
                </div>
                <div className="content-box" style={{backgroundColor: "#D9D9D9", height:"300px", width:"340px", borderRadius: "30px", marginTop: "15px"}}>
                <button onClick={wishCountHandler} style={{ marginLeft:"250px", marginTop: "245px"}}>♡</button>
                </div>
            </div>
            
            <div className='second-container' style={{height:"350px", float: "left", marginLeft:"5%", width:"30%", boxSizing:"border-box", borderRadius: "30px"}}>
                <div className='title' style={{height:'30px', textAlign:'left', display: "flex", alignItems:"center", paddingTop: "10px"}}>
                    2. 영상 콘텐츠
                    <img src={arrow} style={{paddingLeft:'10px'}}></img>
                </div>
                <div className="content-box"  style={{backgroundColor: "#D9D9D9", height:"300px", width:"340px", borderRadius: "30px", marginTop: "15px"}}>
                    <button style={{ marginLeft:"250px", marginTop: "245px"}}>♡</button>
                </div>
            </div>
            <div className='third-container' style={{height:"350px", float: "right", width:"30%", boxSizing:"border-box", borderRadius: "30px"}} >
                <div className='title' style={{height:'30px', textAlign:'left', display: "flex", alignItems:"center", paddingTop: "10px"}}>
                    3. 영상 콘텐츠
                    <img src={arrow} style={{paddingLeft:'10px'}}></img>
                </div>
                <div className="content-box"  style={{backgroundColor: "#D9D9D9", height:"300px", width:"340px", borderRadius: "30px", marginTop: "15px"}}>
                <button style={{ marginLeft:"250px", marginTop: "245px"}}>♡</button>
                </div>
            </div>

        </div>
        );
}