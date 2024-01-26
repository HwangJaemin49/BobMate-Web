import React from 'react';
import NameDiv from './NameDiv';
import { MyPageTab } from './MyPageTab';


export default function MyPage() {
    return (
        <div className='mypage-container' style={{}}>
            <NameDiv />
            <MyPageTab />
        </div>
    );

}