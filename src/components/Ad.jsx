import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Content(props) {
    const navigate = useNavigate();

    const onClickAd = () => {
        navigate(`/${props.ad}`, {
            state: props,
        });
    };

    return (
        <div className="ad-container" onClick={onClickAd} style={{backgroundColor:"#D9D9D9", height:"100px", marginTop:"60px", width:"100%"}}>
            광고 배너
        </div>
        );
}