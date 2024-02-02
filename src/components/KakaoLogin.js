import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react";


const KakaoLogin = () => {

    const code = new URL(window.location.href).searchParams.get('code')
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        fetch(`http://43.202.23.75/api/v1/auth/kakao`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            body: {
                'authorizationCode' : `${code}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.access_token) {
                console.log(data.access_token);
                fetch('http://ec2-43-202-23-75.ap-northeast-2.compute.amazonaws.com/callback', {
                    method: "GET",
                    headers: {
                        Authorization: data.access_token,
                    },
                })
                .then(response => response.json())
                .then(result => {
                    if (result.access_token) {
                        localStorage.setItem('token', result.access_token);
                        alert('Welcome');
                        navigate('/');
                    } else {
                        alert('Failed');
                        navigate('/login');
                    }
                });
            }
        });
    }, []);

}


export default KakaoLogin;