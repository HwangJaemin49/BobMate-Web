import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Content(props) {
    const navigate = useNavigate();

    const onClickContent = () => {
        navigate(`/${props.name}`, {
            state: props,
        });
    };

    return (
        <div className="food-container" onClick={onClickContent}>
            <img src={props.poster_path} alt="콘텐츠 표지" />
            {/* 하트(찜하기) */}
            <div className="food-info" alt = "텍스트 예시입니다.">
                <h4>{props.name}</h4>
            </div>
        </div>
        );
}