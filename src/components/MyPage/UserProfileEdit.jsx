import React, { useState, useRef } from 'react';
import ProfileIcon from '../images/person-icon.png';
import StyledInput from './StyledInput';
import SaveButton from './SaveButton';
import './UserProfileEdit.css';

const UserProfileEdit = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const [nextModalOpen, setNextModalOpen] = useState(false);
  const [endModalOpen, setEndModalOpen] = useState(false);
  const nextModalConfirm = () => {
    // 모달 닫기 및 다음 모달로 이동
    setModalOpen(false);
    setNextModalOpen(true);
  }

  const endModalConfirm = () => {
    // 모달 닫기 및 다음 모달로 이동
    setNextModalOpen(false);
    setEndModalOpen(true);
  }
  const handleProfilePictureChange = (e) => {
    // 프로필 사진 변경 로직
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleProfilePictureDelete = () => {
    // 프로필 사진 삭제 로직
    setProfilePicture(null);
  };

  const handleNicknameChange = (e) => {
    // 닉네임 변경 로직
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    // 이메일 변경 로직
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    // 현재 비밀번호 입력 로직
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    // 새 비밀번호 입력 로직
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    // 새 비밀번호 확인 로직
    setConfirmNewPassword(e.target.value);
  };

  const handleSaveChanges = () => {
    // 변경사항 저장 로직
    // 이 부분에서 서버로 변경된 정보를 전송할 수 있습니다.
  };

  return (
    <div style={{ flexDirection: 'column', display: 'flex', width: '70%', height: '70%', paddingTop: '100px', paddingBottom:'100px' }}>
      <h2 style={{ textAlign: 'center' }}>프로필 편집</h2>
      <div style={{ marginLeft: '200px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label style={{ marginLeft: '10px', marginRight: '10px' }}>프로필 사진</label>
          <div style={{ width: '100px', height: '100px', borderRadius: '70%', overflow: 'hidden', backgroundImage: { ProfileIcon }, backgroundSize: 'cover', backgroundColor: 'blue' }} />
          <input type="file" onChange={handleProfilePictureChange} style={{ marginLeft: '10px' }} />
          {profilePicture && (
            <div style={{ marginLeft: '10px' }}>
              <div class="profile-img" />
              <button onClick={handleProfilePictureDelete}>Delete Picture</button>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
            <label style={{ marginBottom: '10px' }}>닉네임</label>
            <label style={{ marginBottom: '10px' }}>이메일</label>
            <label style={{ marginBottom: '10px' }}>현재 비밀번호</label>
            <label style={{ marginBottom: '10px' }}>새 비밀번호</label>
            <label style={{ marginBottom: '10px' }}>새 비밀번호 확인</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ flexDirection: 'row' , marginBottom: '10px' }}>
              <input type="text" value={nickname} onChange={handleNicknameChange} style={{marginLeft: '78px'}}/>
              <button style={{ marginLeft: '10px' }}>중복확인</button>
            </div>
            <input type="email" value={email} onChange={handleEmailChange} style={{ marginBottom: '10px' }} />
            <input type="password" value={currentPassword} onChange={handleCurrentPasswordChange} style={{ marginBottom: '10px' }} />
            <input type="password" value={newPassword} onChange={handleNewPasswordChange} style={{ marginBottom: '10px' }} />
            <input
              type="password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
              style={{ marginBottom: '10px' }}
            />
          </div>
        </div>
      </div>
      <div className={'btn-wrapper'}>
        <button onClick={handleSaveChanges} style={{marginBottom:'10px'}} >변경사항 저장</button>
        <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}  style={{marginBottom:'10px'}}> 
          회원 탈퇴
        </button>
      </div>
      {
        modalOpen &&
        <div className={'modal-container'} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }}>
          <div className={'modal-content'}>

            <h3 className={'modal-inner'}>OOO님, 정말 탈퇴하시겠어요?</h3>
            <p className={'modal-inner'}>! 탈퇴 시, 더 이상 해당 계정으로 밥 친구를 이용할 수 없습니다.</p>
            <p className={'modal-inner'}>! 탈퇴 시, 고객님의 모든 활동 기록이 삭제되며 삭제된 정보는 복구할 수 없습니다.</p>

            <h4 className={'modal-inner'}>그래도 회원 탈퇴를 진행할까요?</h4>
            <div className="btn-wrapper">
              <SaveButton type="button" className={'modal-close-btn'} onClick={() => setModalOpen(false)}>취소</SaveButton>
              <SaveButton type="button" className={'modal-withdraw-btn'} onClick={nextModalConfirm}>확인</SaveButton>
            </div>
          </div>
        </div>
      }
      {nextModalOpen && 
        <div className={'modal-container'} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setNextModalOpen(false); 
          }
        }}>
          <div className={'modal-content'}>
            <h3 className={'modal-inner'}>너무 아쉬워요</h3>
            <p className={'modal-inner'}>회원 탈퇴를 위해 현재 사용 중인 비밀번호를 입력해주세요.</p>
            <StyledInput placeholder="비밀번호를 입력해 주세요"></StyledInput>
            <div className="btn-wrapper">
            <SaveButton className={'modal-close-btn'} onClick={() => setNextModalOpen(false)}>취소</SaveButton>
            <SaveButton className={'modal-withdraw-btn'} onClick={endModalConfirm}>확인</SaveButton>
            </div>
            </div>
        </div>
      }
      {endModalOpen && 
        <div className={'modal-container'} ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setEndModalOpen(false);
          }
        }}>
          {/*마지막 모달 컴포넌트를 렌더링*/}
          <div className={'modal-content'}>
            <h3 className={'modal-inner'}>회원 탈퇴가 완료되었어요.</h3>
            <p className={'modal-inner'}>그동안 밥 친구를 이용해 주셔서 감사합니다 </p>
            <div className="btn-wrapper">
            <SaveButton className={'modal-close-btn'} onClick={() => setEndModalOpen(false)}>확인</SaveButton>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default UserProfileEdit;