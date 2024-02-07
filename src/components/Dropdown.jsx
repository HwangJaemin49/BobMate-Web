import { Link } from "react-router-dom";

function Dropdown() {
    return (
        <div style={{width: "150px", height: "110px", border: "1px solid #D9D9D9", background:"white"}}>
            <li><Link to='/mypage'>나의 밥 친구 기록</Link></li>
            <li><Link to='/profile'>프로필 편집</Link></li><br />
        
        
        </div>
    );
}
export default Dropdown;