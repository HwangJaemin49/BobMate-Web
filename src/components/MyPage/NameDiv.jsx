import {React, useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProfileImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #E9E9E9;
    overflow: hidden;
    background-size: cover;
    background-color: white;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`   
const NameDiv = ({accessToken}) => {
    
    const [content, setContent] = useState({});
    const SERVER_URI = process.env.REACT_APP_SERVER_URI;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/v1/members/edit`, {
                    headers: {
                        Authorization: `${accessToken}`
                    },
                });
                setContent(response.data.result);
                console.log(response.data);
            } catch(e){
                console.log(e);
            }
        }
        fetchData();
    }, [accessToken, SERVER_URI]);
    
    return (
        <div className='mypage-header' style={{ height: '250px', backgroundColor: '#FFFDE5', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', position: 'relative',
        borderBottom:'1px solid #E9E9E9' }}>
            <p className="mypage-name" style={{ margin: '10px', fontSize: '20px' }}>{content.nickname}님의</p>
            <p className="mypage-name" style={{ margin: '10px', fontSize: '30px', marginBottom: '50px'}}>밥 친구 기록</p>
            <ProfileImg src={content.profileImage} alt='Profile' />
        </div>
    );
}
export default NameDiv;