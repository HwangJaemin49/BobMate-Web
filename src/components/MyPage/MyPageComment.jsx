import { React, useState } from 'react';
import headerLogo from '../images/bxs_bowl-rice.png';
import SaveButton from './SaveButton';
import StyledInput from './StyledInputWrapper';
import axios from 'axios';



export default function MyPageComment() {
    const [comments, setComments] = useState({
        emotion: "",
        food: "",
        genre: ""
    })
    const accessToken = localStorage.getItem('accessToken');  // localStorage에서 accessToken 가져오기

    const handleOnChange = (e) => {
        setComments({
            ...comments,
            [e.target.name]: e.target.value
        })
    }

    const commentSave = () => {
        console.log('코멘트 저장 버튼 클릭');
        console.log(comments);

        // 확인: accessToken이 존재하는지
        if (!accessToken) {
            console.error('accessToken이 존재하지 않습니다.');
            return;
        }

        // axios를 사용하여 서버에 데이터 전송
        axios.post(`/api/v1/members/comment`, comments,
            {
                headers: {
                    'Content-Type': 'application/json', // 필요에 따라 Content-Type을 설정
                    'Authorization': accessToken // yourAccessToken에 실제 토큰을 넣어주세요
                }
            }
        )
            .then(response => {
                // 성공적으로 응답 받았을 때 수행할 작업
                console.log(response.data);
                alert("[한 줄 코멘트 저장] 감정:"+comments.emotion+", 음식:" +comments.food+", 장르:"+comments.genre);
            })
            .catch(error => {
                // 여기서 에러 메시지 출력
                console.error('에러 발생:', error);

                // 에러 응답이 있다면 에러 응답의 데이터를 출력
                if (error.response) {
                    console.error('에러 응답 데이터:', error.response.data);
                }
            });

    };
    return (
        <div className='mypage-comment-wrap' style={{ margin: '5px 30px 30px 30px', display: 'flex', flexDirection: 'column' }} >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '380px' }}>
                <img src={headerLogo} alt='header logo' style={{ marginRight: '15px', width: '25px' }} />
                <p style={{ fontSize: '20px' }}>오늘의 한 줄 코멘트를 완성해 주세요!</p>
            </div>
            <div className='comment-box' style={{
                border: '2px solid #000', padding: '10px', borderRadius: '20px', width: '47%', height: '200px', alignItems: 'center', display: 'flex', justifyContent: 'center',
                flexDirection: 'column', marginLeft: '26%', marginTop: '20px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
                    <p style={{ fontSize: '20px', margin: '5px' }}>나는</p>
                    <select name="emotion" onChange={handleOnChange} style={{
                        width: '200px', fontSize: '16px', padding: '5px', borderRadius: '5px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        color: 'gray',
                        textAlign: 'center'
                    }}>
                        <option value="" disabled selected hidden>😊감정 입력</option>
                        <option value="GLAD">기쁠</option>
                        <option value="EXCITED">신날</option>
                        <option value="GLOOMY">우울할</option>
                        <option value="ANGRY">화가 날</option>
                        <option value="SAD">슬플</option>
                    </select>
                    <p style={{ fontSize: '20px', margin: '5px' }}>때</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
                    <StyledInput placeholder="🍚음식 입력" name="food" isCentered={true} style={{ width: '200px' }}
                        onChange={handleOnChange} />
                    <p style={{ fontSize: '20px', margin: '5px' }}>을(를) 먹으면서</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
                <select name="genre" onChange={handleOnChange} style={{
                        width: '200px', fontSize: '16px', padding: '5px', borderRadius: '5px',
                        border: '1px solid gray',
                        backgroundColor: 'white',
                        color: 'gray',
                        textAlign: 'center'
                    }}>
                        <option value="" disabled selected hidden>🎬장르 입력</option>
                        <option value="DRAMA">드라마</option>
                        <option value="MOVIE">영화</option>
                        <option value="ANIMATION">애니메이션</option>
                        <option value="MYSTERY">미스테리</option>
                        <option value="COMIC">만화</option>
                        <option value="COMEDY">코미디</option>
                        <option value="ROMANCE">로맨스</option>
                        <option value="ACTION">액션</option>
                        <option value="THRILLER">스릴러</option>
                        <option value="CRIME">범죄</option>
                        <option value="FANTASY">판타지</option>
                        <option value="HIGHTEEN">하이틴</option>
                        <option value="FAMILY">가족</option>
                    </select>
                    <p style={{ fontSize: '20px', margin: '5px' }}>을(를) 봐!</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
                <SaveButton onClick={commentSave}>저장</SaveButton>
            </div>
        </div>

    )
}