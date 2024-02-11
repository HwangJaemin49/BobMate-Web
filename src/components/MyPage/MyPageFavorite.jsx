import React, { useState } from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import SaveButton from './SaveButton';
import axios from "axios";

export default function MyPageFavorite() {
  const [preferenceList, setPreferenceList] = useState(['', '', '']);

  const handleInputChange = (index, value) => {
    const updatedPreferenceList = [...preferenceList];
    updatedPreferenceList[index] = value;
    setPreferenceList(updatedPreferenceList);
  };
  const accessToken = localStorage.getItem('accessToken');

  const handleSaveButtonClick = () => {
    console.log('콘텐츠 선호도 저장 버튼 클릭');
    console.log(preferenceList);

    // API 요청 보내기
    axios.post('/api/v1/members/preference', {preferenceList},
      {
        headers: {
          'Authorization': accessToken
        }
      })

      .then(response => {
        // 성공적으로 응답 받았을 때 수행할 작업
        console.log(response.data);
        alert(preferenceList);
      })
      .catch(error => {
        // 오류 발생 시 수행할 작업
        console.error(error);
      });
  };
  return (
    <div className='mypage-favorite-wrap' style={{ margin: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '300px' }}>
        <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
        <p style={{ fontSize: '20px' }}>당신의 콘텐츠 선호도를 기록해 주세요!</p>
      </div>
      <ol style={{ marginTop: '20px', paddingLeft: '20px', alignItems: 'center' }}>
        {preferenceList.map((input, index) => (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`선호하는 콘텐츠 ${index + 1}위를 입력해 주세요`}
              style={{
                width: '400px', padding: '8px', marginBottom: '30px', float: 'left', border: '1px solid gray',
                borderRadius: '5px'
              }} />
          </div>
        ))}
      </ol>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <SaveButton onClick={handleSaveButtonClick}>저장</SaveButton>
      </div>
    </div>
  );
}