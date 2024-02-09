import React from 'react';
import NameDiv from './NameDiv';
import { MyPageTab } from './MyPageTab';



export default function MyPage({accessToken}) {
    return (
        <div className='mypage-container' style={{}}>
            <NameDiv accessToken={accessToken}/>
            <MyPageTab />
        </div>
    );

}