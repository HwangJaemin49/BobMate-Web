import React, { useState } from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import SaveButton from './SaveButton';

export default function MyPageFavorite() {
  const [userInputs, setUserInputs] = useState(['', '', '']);

  const handleInputChange = (index, value) => {
    const newInputs = [...userInputs];
    newInputs[index] = value;
    setUserInputs(newInputs);
  };

  return (
    <div className='mypage-favorite-wrap' style={{ margin: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={headerLogo} alt='header logo' style={{ marginRight: '5px' }} />
        <p style={{ fontSize: '30px' }}>당신의 콘텐츠 선호도를 기록해 주세요!</p>
      </div>
      <ol style={{ marginTop: '20px', paddingLeft: '20px' }}>
        {userInputs.map((input, index) => (
            <div style={{display: 'flex'}}>
                <p style={{marginRight: '30px'}}>{index+1}.</p>
                <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={`사용자 입력 ${index + 1}`}
                style={{ width: '100%', padding: '5px', marginBottom:'30px', float:'left', borderRight:'0px', borderLeft: '0px', borderTop:'0px'
                , boderLeft: '0px' }}                />
            </div>
        ))}
      </ol>
      <SaveButton >저장</SaveButton>
    </div>
  );
}