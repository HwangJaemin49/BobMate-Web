import React from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import SaveButton from './SaveButton';
import StyledInput from './StyledInputWrapper';


export default function MyPageComment() {
    return (
        <div className='mypage-comment-wrap' style={{ margin: '30px', display: 'flex', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom:'20px', marginLeft:'300px' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '20px' }}>오늘의 한 줄 코멘트를 완성해주세요!</p>
            </div>
            <div className='comment-box' style={{border: '2px solid #000', padding: '10px',borderRadius:'20px',width:'50%', height: '200px',alignItems: 'center',display: 'flex',justifyContent: 'center',
             flexDirection: 'column', marginLeft:'25%', marginTop:'20px'}}>
                <div style={{display:'flex', flexDirection:'row', margin: '10px'}}>
                    <p style={{fontSize:'20px', margin: '5px'}}>나는</p>
                    <StyledInput placeholder="😊감정 입력" isCentered={true} style={{width:'200px'}}/>
                    <p style={{fontSize:'20px', margin: '5px'}}>일 때</p>
                </div>
                <div style={{display:'flex', flexDirection:'row', margin: '10px'}}>
                    <StyledInput placeholder="🍚음식 입력" isCentered={true}style={{width:'200px'}} />
                    <p style={{fontSize:'20px', margin: '5px'}}>을 먹으면서</p>
                </div>
                <div style={{display:'flex', flexDirection:'row', margin: '10px'}}>
                    <StyledInput placeholder="🎬장르 입력" isCentered={true} style={{width:'200px'}}/>
                    <p style={{fontSize:'20px', margin:'5px'}}>를 봐!</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginTop:'50px' }}>
                <SaveButton>저장</SaveButton>
            </div>
        </div>

    )
}