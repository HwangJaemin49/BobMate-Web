import { React, useEffect, useState } from 'react';
import youtubeIcon from '../images/youtube.png';
import menuIcon from '../images/menu.png';
import ContentGrid from './ContentGrid';
import axios from 'axios';


export default function MyPageWish() {
    const [contents, setContents] = useState([]);
    const [menus, setMenus] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        axios.get('/api/v1/likes/content',
            {
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': accessToken 
                }
            })
            .then(function (response) {
                console.log(response.data.result);
                setContents(response.data.result);
            }).catch(function (error) {
                // 오류발생시 실행
            }).then(function () {
                // 항상 실행
            });
    }, [accessToken]);

    useEffect(() => {
        axios.get('/api/v1/likes/menu',
            {
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': accessToken
                }
            })
            .then(function (response) {
                console.log(response.data.result);
                setMenus(response.data.result);
            }).catch(function (error) {
                // 오류발생시 실행
            }).then(function () {
                // 항상 실행
            });
    }, [accessToken]);

    return (
        <div className='mypage-wish-wrap' style={{ margin: '30px', display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'left', marginBottom: '20px', marginLeft: '-50%' }}>
                <img src={youtubeIcon} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '25px' }}>내가 찜한 콘텐츠</p>
            </div>
            <ContentGrid inputDataList={contents} keyName="contentId"/>
            <div style={{ display: 'flex', alignItems: 'left', marginBottom: '20px', marginLeft: '-50%', marginTop: '50px' }}>
                <img src={menuIcon} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '25px' }}>내가 찜한 메뉴</p>
            </div>
            <ContentGrid inputDataList={menus} keyName="menuId"/>
        </div>
    )
}