import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteToken } from '../store/tokenState';

function Dropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    localStorage.removeItem('accessToken');
    dispatch(deleteToken());
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <div
      style={{
        width: '150px',
        border: '1px solid #D9D9D9',
        background: 'white',
      }}
    >
      <li>
        <Link to='/mypage'>나의 밥 친구 기록</Link>
      </li>
      <li>
        <Link to='/profile'>프로필 편집</Link>
      </li>
      <br />
      <li>
        <button onClick={onClick}>로그아웃</button>
      </li>
    </div>
  );
}
export default Dropdown;
