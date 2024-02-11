import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import StyledInput from './StyledInputWrapper';
import SaveButton from './SaveButton';
import './UserProfileEdit.css';

const UserProfileEdit = () => {
  const [image, setImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  
  const [request, setRequest] = useState({
    name: ""
  });
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

  const fileInput = useRef(null);
  const handleProfilePictureChange = (e) => {
    // 프로필 사진 변경 로직
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else { //업로드 취소할 시
      setImage(null);
      return;
    }
    // 화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      setPrevImage(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
    // //화면에 프로필 사진 표시
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     setImage(reader.result)
    //   }
    // }
    // reader.readAsDataURL(e.target.files[0])
  }


  //사진 삭제
  const handleProfilePictureDelete = () => {
    setImage(null);
    setPrevImage(null);
    if (fileInput.current) {
      fileInput.current.value = null;
    }
  };

  const handleNicknameChange = (e) => {
    // 닉네임 변경 로직
    setRequest(prevState => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const accessToken = localStorage.getItem('accessToken');

  //저장
  const handleSaveChanges = (e) => {
    e.preventDefault();
    const form = new FormData();
    // 이미지 파일을 추가합니다.
    form.append("profileImage", image);

    form.append(
      "request",
      new Blob([JSON.stringify(request)], {
        type: "application/json",
      })
    );
    axios.post('/api/v1/members/edit', form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': accessToken
        }
      }).then(res => {
        alert("성공");
      }).catch(err => {
        console.error('Error while saving changes', err);
        alert("문제 있음", err.message); // 에러 메시지 출력
        console.log(err.message);
      });

  }


  //프로필 사진, 닉네임 가져오기
  useEffect(() => {
    axios.get('/api/v1/members/edit',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken
        }
      })
      .then(function (response) {
        console.log(response.data.result);
        setImage(response.data.result.profileImage);

        setRequest(prevState => ({
          ...prevState,
          name: response.data.result.nickname
        }));

      }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행
      });
  }, [accessToken], [request]);
  return (
    <div style={{ flexDirection: 'column', display: 'flex', width: '70%', height: '70%', paddingTop: '100px', paddingBottom: '100px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '20px' }}>프로필 편집</h2>
      <div style={{ marginLeft: '200px', display: 'flex', flexDirection: 'column', paddingTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <label style={{ marginLeft: '10px', marginRight: '10px' }}>프로필 사진</label>
          <div style={{
            width: '100px', height: '100px', borderRadius: '70%',
            overflow: 'hidden', backgroundImage: prevImage? `url(${prevImage})` : (image ? `url(${image})` : 'none'), backgroundSize: 'cover',
            backgroundColor: 'white', border: '1px #e9e9e9 solid', marginLeft: '100px'
          }} />
          <input
            type='file'
            style={{ marginLeft: '10px' }}
            // accept='image/jpg,impge/png,image/jpeg'
            name='profile_img'
            onChange={handleProfilePictureChange}
            ref={fileInput}
            accept="image/*" />
          {image && (
            <div style={{ marginLeft: '10px' }}>
              <div class="profile-img" />
              <button onClick={handleProfilePictureDelete}>Delete Picture</button>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
            <label style={{ marginBottom: '23px' }}>닉네임</label>
          </div>
          <div style={{ flexDirection: 'row', marginLeft: '-10px', marginBottom: '10px' }}>
            <StyledInput type="text" value={request.name} onChange={handleNicknameChange} placeholder="새 닉네임을 입력해 주세요" style={{ marginLeft: '10px', width: '400px' }} />
            <button style={{ marginLeft: '10px', border: '2px solid black', padding: '3px', borderRadius: '10%', width: '100px' }}>중복확인</button>
          </div>
        </div>
      </div>
      <div className={'btn-wrapper'}>
        <SaveButton onClick={handleSaveChanges} style={{ marginBottom: '10px' }} >변경사항 저장</SaveButton>
        <button className={'modal-open-btn'} onClick={() => setModalOpen(true)} style={{ marginTop: '10px', marginBottom: '10px', textDecoration: 'underline' }}>
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
            <div style={{ paddingLeft: '30px', textAlign: 'center' }}>
              <h3 className={'modal-inner'} style={{ fontSize: '25px', marginBottom: '20px' }}>OOO님, <br />정말 탈퇴하시겠어요?</h3>
            </div>
            <div className="btn-wrapper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <SaveButton type="button" className={'modal-close-btn'} style={{ backgroundColor: '#d9d9d9' }} onClick={() => setModalOpen(false)}>취소</SaveButton>
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
            <div style={{ paddingLeft: '30px' }}>
              <h3 className={'modal-inner'} style={{ fontSize: '25px', marginBottom: '20px' }}>잠깐! 꼭 확인해주세요 😢</h3>
              <p className={'modal-inner'} style={{ marginBottom: '10px' }}>! 탈퇴 시, 더 이상 해당 계정으로 밥 친구를 이용할 수 없습니다.</p>
              <p className={'modal-inner'} style={{ marginBottom: '30px' }}>! 탈퇴 시, 고객님의 모든 활동 기록이 삭제되며 삭제된 정보는 복구할 수 없습니다.</p>
            </div>

            <div className="btn-wrapper" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <SaveButton className={'modal-close-btn'} style={{ backgroundColor: '#d9d9d9' }}
                onClick={() => setNextModalOpen(false)}>취소</SaveButton>
              <SaveButton className={'modal-withdraw-btn'} onClick={endModalConfirm}>탈퇴</SaveButton>
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className={'modal-inner'} style={{ fontSize: '25px', marginBottom: '20px' }}>회원 탈퇴가 완료되었어요.</h3>
              <p className={'modal-inner'} style={{ marginBottom: '10px' }}>그동안 밥 친구를 이용해 주셔서 감사합니다 :)</p>
            </div>
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