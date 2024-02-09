import {React,useState} from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import ContentGrid from './ContentGrid';
import axios from 'axios';


export default function MyPageWish({accessToken}) {
    const [contents, setContents] = useState([]);
    const [menus, setMenus] = useState([]);
    axios.get('/api/v1/comments//??',
    {
        headers: {
            'Content-Type': 'application/json', // 필요에 따라 Content-Type을 설정
            'Authorization': `Bearer ${accessToken}` // yourAccessToken에 실제 토큰을 넣어주세요
        }
    })
    .then(function (response) {
        setContents(response.data.result.contents);
        setMenus(response.data.result.menus);
        console.log(response.data);
   }).catch(function (error) {
       // 오류발생시 실행
   }).then(function() {
       // 항상 실행
   });

    return (
        <div className='mypage-wish-wrap' style={{ margin: '30px', display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'left', marginBottom: '20px', marginLeft: '-35%' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '20px' }}>내가 찜한 콘텐츠</p>
            </div>
            <ContentGrid />
            <div style={{ display: 'flex', width: '100%', marginBottom: '20px', marginLeft: '300px', marginTop: '50px' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '20px' }}>내가 찜한 메뉴</p>
            </div>
            <ContentGrid />
        </div>
    )
}