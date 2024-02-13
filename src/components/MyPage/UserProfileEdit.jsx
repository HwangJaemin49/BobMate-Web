import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StyledInput from './StyledInputWrapper';
import SaveButton from './SaveButton';
import './UserProfileEdit.css';

const UserProfileEdit = () => {
  const [image, setImage] = useState(null); //프로필 이미지
  const [prevImage, setPrevImage] = useState(null); //미리보기 이미지
  // const [imageFile, setImageFile] = useState(null); //인풋 이미지 파일
  const [nickname, setNickname] = useState(''); //닉네임 불러오기용
  const [request, setRequest] = useState({
    name: ""
  }); //닉네임 변경
  const [dpNameCheck, setDpNameCheck] = useState(false); //닉네임 중복체크 여부

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const [nextModalOpen, setNextModalOpen] = useState(false);
  const [endModalOpen, setEndModalOpen] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  const navigate = useNavigate();
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

  const withdrawEnd = (e) => {
    axios.delete('/api/v1/auth/kakao', {
      headers: {
        'Authorization': accessToken
      }
    })
      .then(() => {
        alert('그동안 이용해주셔서 감사합니다.');
        localStorage.clear();
        setEndModalOpen(false);
        // dispatch({ type: 'LOGOUT' });
        navigate('/');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        setEndModalOpen(false);
      })
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
  }


  //사진 삭제
  const handleProfilePictureDelete = () => {
    setImage(null);
    setPrevImage(null);
    if (fileInput.current) {
      fileInput.current.value = null;
    }
  };

  // 닉네임 변경 로직
  const handleNicknameChange = (e) => {
    setRequest(prevState => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  //프로필 사진 변경, 닉네임 변경 저장버튼 클릭
  const handleSaveChanges = (e) => {
    e.preventDefault();
    try {
      if (!dpNameCheck) throw new Error('닉네임 중복 여부를 확인해주세요.');
      const form = new FormData();
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
    } catch (error) {
      alert(error.message);
    }

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
        setNickname(response.data.result.nickname);
      }).catch(function (error) {
        // 오류발생시 실행
      }).then(function () {
        // 항상 실행
      });
  }, [accessToken], [request]);

  //닉네임 중복확인
  const checkDuplicateNickname = (e) => {
    const temp = request.name;
    const encodedTemp = encodeURIComponent(temp);

    axios.get(`api/v1/members/duplicate?name=${encodedTemp}`)
      .then(res => {
        // 여기에서 response를 처리하면 됩니다.
        console.log(res.data.result);
        if (res.data.result) {
          alert('닉네임 중복 다시 입력해주세요');
          setDpNameCheck(false);
        } else {
          alert(`${temp}은 사용할 수 있는 닉네임입니다`);
          setDpNameCheck(true);
        }
      }).catch(error => {
        // 에러 처리
        console.error('API 요청 중 에러 발생:', error);
      })
  };


  return (
    <div style={{ flexDirection: 'column', display: 'flex', width: '70%', height: '70%', paddingTop: '100px', paddingBottom: '100px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '30px' }}>프로필 편집</h2>
      <div style={{ marginLeft: '300px', display: 'flex', flexDirection: 'column', paddingTop: '40px' }}>
        <div style={{ display: 'flex', marginBottom: '10px', flexDirection: 'column' }}>
          <label style={{ marginLeft: '10px', marginRight: '10px' }}>프로필 사진 변경</label>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '70%',
              overflow: 'hidden', backgroundImage: prevImage ? `url(${prevImage})` : (image ? `url(${image})` : 'none'), backgroundSize: 'cover',
              backgroundColor: 'white', border: '1px #e9e9e9 solid', marginRight: '30px'
            }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type='file'
                style={{ display: 'none' }} // 원래 파일 입력 요소를 감춥니다.
                name='profile_img'
                onChange={handleProfilePictureChange}
                ref={fileInput}
                accept="image/*"
                id="fileInput"
              />
              <label
                style={{
                  marginLeft: '10px',
                  border: '2px solid black',
                  padding: '3px',
                  borderRadius: '10%',
                  width: '120px',
                  textAlign: 'center',
                  cursor: 'pointer' // 포인터 커서를 통해 사용자에게 클릭 가능함을 알립니다.
                }}
                htmlFor="fileInput" // 레이블과 파일 입력 요소를 연결합니다.
              >
                사진 불러오기
              </label>
            </div>
            {image && (
              <div style={{ marginLeft: '10px' }}>
                <div className="profile-img" />
                <button onClick={handleProfilePictureDelete} style={{ marginTop: '33px',marginLeft: '10px', border: '2px solid black', padding: '3px', borderRadius: '10%', width: '120px' }}>사진 삭제</button>
              </div>
            )}
          </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginBottom: '10px',marginTop: '30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
            <label style={{ marginBottom: '23px' }}>닉네임 변경</label>
          </div>
          <div style={{ flexDirection: 'row', marginLeft: '-10px', marginBottom: '10px' }}>
            <StyledInput type="text" value={request.name} onChange={handleNicknameChange} placeholder="새 닉네임을 입력해 주세요" style={{ marginLeft: '10px', width: '400px' }} />
            <button onClick={checkDuplicateNickname} style={{ marginLeft: '10px', border: '2px solid black', padding: '3px', borderRadius: '10%', width: '100px' }}>중복확인</button>
          </div>
        </div>
      </div>
      <div className={'btn-wrapper'}>
        <SaveButton onClick={handleSaveChanges} style={{ marginBottom: '10px', marginTop:'30px' }} >변경사항 저장</SaveButton>
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
              <h3 className={'modal-inner'} style={{ fontSize: '25px', marginBottom: '20px' }}>{nickname}님<br />정말 탈퇴하시겠어요?</h3>
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
              <SaveButton className={'modal-close-btn'} onClick={withdrawEnd}>확인</SaveButton>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default UserProfileEdit;