import React from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import ContentGrid from './ContentGrid';


export default function MyPageWish() {
    return (
        <div className='mypage-comment-wrap' style={{ margin: '30px', display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '5px' }} />
                <p style={{ fontSize: '30px', float:'left'  }}>내가 찜한 콘텐츠</p>
            </div>
            <ContentGrid />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '5px' }} />
                <p style={{ fontSize: '30px', float:'left'  }}>내가 찜한 메뉴</p>
            </div>
            <ContentGrid />
        </div>
    )
}