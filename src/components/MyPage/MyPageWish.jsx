import React from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import ContentGrid from './ContentGrid';


export default function MyPageWish() {
    return (
        <div className='mypage-wish-wrap' style={{ margin: '30px', display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems:'left',  marginBottom:'20px', marginLeft:'-35%' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '20px' }}>당신의 콘텐츠 선호도를 기록해 주세요!</p>
            </div>
            <ContentGrid />
            <div style={{ display: 'flex', width: '100%', marginBottom:'20px', marginLeft:'300px', marginTop:'50px' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '20px' }}>내가 찜한 메뉴</p>
            </div>
            <ContentGrid />
        </div>
    )
}