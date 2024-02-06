import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoginButton() {
    const navigate = useNavigate();

    //클릭하면 로그인 페이지로 이동
    const handleClick = () => {
        navigate('/login');
    }

    return (
        '로그인'
    )
}