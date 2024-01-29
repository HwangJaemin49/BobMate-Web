import React from 'react';
import ProfileImage from './ProfileImage';

export default function NameDiv() {
    return (
        <div className='mypage-header' style={{ height: '250px', backgroundColor: '#FFFDE5', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', position: 'relative',
        borderBottom:'1px solid #E9E9E9' }}>
            <p className="mypage-name" style={{ margin: '10px', fontSize: '20px' }}>OOO님의</p>
            <p className="mypage-name" style={{ margin: '10px', fontSize: '30px', marginBottom: '50px'}}>밥 친구 기록</p>
            <ProfileImage />
        </div>
    );
}