import React from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import SaveButton from './SaveButton';
import StyledInput from './StyledInput';


export default function MyPageComment() {
    return (
        <div className='mypage-comment-wrap' style={{ margin: '30px', display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '5px' }} />
            <p style={{ fontSize: '30px' }}>오늘의 한 줄 코멘트를 완성해 주세요!</p>
            </div>
            <div className='comment-box' style={{border: '3px solid #000', borderRadius:'20px',width:'70%', height: '200px',alignItems: 'center',display: 'flex',justifyContent: 'center'
  }}>
                <p style={{fontSize:'20px'}}>나는</p>
                <StyledInput placeholder="감정 입력"/>
                <p style={{fontSize:'20px'}}>일 때</p>
                <StyledInput placeholder="음식 입력"/>
                <p style={{fontSize:'20px'}}>을 먹으면서</p>
                <StyledInput placeholder="장르 입력"/>
                <p style={{fontSize:'20px'}}>를 봐!</p>
            </div>
            <SaveButton>저장</SaveButton>
        </div>

    )
}