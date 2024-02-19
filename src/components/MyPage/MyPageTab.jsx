import { useState } from 'react';
import styled from 'styled-components';
import MyPageComment from './MyPageComment';
import MyPageFavorite from './MyPageFavorite';
import MyPageWish from './MyPageWish';

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

const TabMenu = styled.ul`
  clear: both;
  // background-color: #dcdcdc;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  margin-top: 80px;
  margin-left: auto; /* auto로 설정하여 화면 가운데 정렬 */
  margin-right: auto; /* auto로 설정하여 화면 가운데 정렬 */
  justify-content: center;

  
  .submenu {
  // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    width: 380px;
    heigth: 30px; */
    width: calc(100% /3);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
    justify-content: center;
    align-items: center;
  }

  // .first-submenu {
  //   margin-left: 10%; 
  // }

  .focused {
   //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255,255,255);
    color: rgb(21,20,20);
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-position:under;
    text-underline-position:under;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const MyPageTab = () => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: '나의 선호도', content: <MyPageFavorite /> },
    { name: '나의 한 줄 코멘트', content: <MyPageComment /> },
    { name: '나의 찜', content: <MyPageWish /> },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {/* <li className="submenu">{menuArr[0].name}</li>
          <li className="submenu">{menuArr[1].name}</li>
          <li className="submenu">{menuArr[2].name}</li> */}
          {menuArr.map((el, index) => (
            <li
              key={index}
              className={index === currentTab
                ? "submenu focused" + (index === 0 ? " first-submenu" : "")
                : "submenu" + (index === 0 ? " first-submenu" : "")}
              onClick={() => selectMenuHandler(index)}>{el.name}</li>
          ))}
        </TabMenu>
        <Desc>
          {menuArr[currentTab].content}
        </Desc>
      </div>
    </>
  );
};