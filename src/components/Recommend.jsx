import React from 'react';
import { Link } from 'react-router-dom';

export default function Content({ results }) {
    return (
        <div className='content-container' style={{ margin: "10px auto", height: "350px", textAlign: "center", width: "1000px", fontFamily: "Pretendard-SemiBold" }}>
            {results.map((item, index) => (
                <div key={index} className='content-box' style={{ height: "350px", float: index === 0 ? 'left' : 'right', width: "30%", marginLeft: index === 1 ? "5%" : "0", boxSizing: "border-box", borderRadius: "30px" }}>
                    <img src={item.imgUrl} style={{ backgroundColor: "#D9D9D9", height: "300px", width: "300px", borderRadius: "50%" }} alt={`Content ${index + 1}`}></img>
                    <div className='content-information' style={{ height: '30px' }}><br />
                        <span style={{ fontSize: "24px" }}>{item.name}</span>
                    </div>
                    <Link to={item.linkUrl} target="_blank" rel="noopener noreferrer">
                        <div className='button' style={{ width: "100px", border: "2px solid", fontSize: "20px", borderRadius: "10px", marginLeft: "90px", marginTop: "60px" }}>보러 가기</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}