## '밥친구'란?
'밥친구'는 사용자에게 밥을 먹을 때 볼 콘텐츠를 추천해주는 서비스입니다. 밥을 먹기 전 오늘은 밥을 먹으면서 무엇을 보아야 할지 고민하는 시간을 단축하기 위해 '밥친구'를 만들게 되었습니다.<br/>

## 개발 도구
- HTML , CSS, JS
- React
- SpringBoot
- AWS <br/>


## 개발 기간
2023.12 - 2024.02<br/>

## 주요 기능
![ezgif-4-780c078fcf](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/0252dffd-4784-49b2-ab81-b6d95bad7cb5)<br/>
Top3 콘텐츠 및 오늘의 메뉴 추천<br/>
이용자 편의성과 인기를 고려하여 직관적인 UI를 통해 인기 Top3 콘텐츠와 랜덤 메뉴를 추천합니다.<br/><br/>
![제목 없는 동영상 - Clipchamp로 제작 (3)](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/6e8aaecd-c5d2-460a-976a-c692d6263e05)<br/>
![제목 없는 동영상 - Clipchamp로 제작 (4)](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/1ca2537a-468f-493f-b40e-e2dadc7dd50f)<br/>
콘텐츠 추천 서비스<br/>
사용자가 일반 상황 혹은 특정 상황을 선택한 후, 콘텐츠 종류를 고르게 되면 해당되는 콘텐츠를 추천해 줍니다. 콘텐츠는 영상(영화, 드라마 등)과 텍스트(웹소설, 웹툰 등) 콘텐츠 중 선택할 수 있습니다.<br/>
일반 상황에서는 사용자가 선택한 감정 상태와 식사 인원을 선택하면 이를 고려한 장르의 콘텐츠를 추천해 줍니다. 특정 상황이란 ‘비 오는 날 혼술 할 때’, ‘친구와 치킨 먹을 때’와 같이 더욱 구체적이고 직접적인 상황을 제시해, 이와 어울리는 장르의 콘텐츠를 추천해 줍니다.<br/><br/>
![제목 없는 동영상 - Clipchamp로 제작 (5)](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/60818a89-0248-40ca-89c8-41406f14c4f4)<br/>
한 줄 코멘트<br/>
마이 페이지 내의 한 줄 코멘트 기능을 통해 특정 기분일 때 선호하는 콘텐츠 및 음식을 데이터베이스에 저장할 수 있습니다. 이 데이터가 축적되어 콘텐츠 추천 서비스의 특정 상황이 업데이트됩니다.<br/><br/>

## 개발에 참여한 페이지
![ezgif-4-780c078fcf](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/0252dffd-4784-49b2-ab81-b6d95bad7cb5)<br/>
메인 페이지(https://github.com/HwangJaemin49/BobMate-Web/blob/main/src/pages/Home.jsx)<br/><br/>
<img src="https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/25918c90-79d9-45de-8f74-cd6eedcdfd5c" width = "600px" height = "300px" /><br/>
소셜 로그인 페이지(https://github.com/HwangJaemin49/BobMate-Web/blob/main/src/pages/Login.jsx)<br/><br/>

#### 에러 사항<br/>
로컬에서 테스트 할 때는 문제가 없었으나 서버와 연결한 뒤 카카오, 네이버 간편 로그인 기능이 제대로 동작하지 않고 white label page가 뜨는 이슈 발생<br/>
팀원분이 분석하신 바로는,<br/>
- 리액트는 SPA를 사용, 따라서 카카오 redirect uri에 대해서도 SPA로 처리
- 하지만 이를 빌드하고 서버에서 제공하는 방식일 때 카카오(및 네이버) redirect uri에 대해 SPA 처리가 되지 않음(자세한 이유는 불명)
- 그 redirect uri 자체에 접근이 되고 있어 whitelabel error 발생<br/>

#### 해결 방법<br/>
https://copyprogramming.com/howto/whitelabel-error-page-after-refresh<br/>
링크의 solution 2 방식(Spring Boot 앱에 새로운 컨트롤러를 통합하여 White label Error 매핑을 관리)으로 백엔드 코드 수정
<br/><br/>

![ezgif-4-08d735af3e](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/fcb7f90a-740c-47df-b3c9-4e8e501c6119)<br/>
컨텐츠 결과 찾기 완료 페이지(https://github.com/HwangJaemin49/BobMate-Web/blob/main/src/pages/FindDone.jsx)<br/><br/>
