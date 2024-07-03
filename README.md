## '밥친구'란?
'밥친구'는 사용자에게 밥을 먹을 때 볼 콘텐츠를 추천해주는 서비스입니다. 밥을 먹기 전 오늘은 밥을 먹으면서 무엇을 보아야 할지 고민하는 시간을 단축하기 위해 '밥친구'를 만들게 되었습니다.<br/>

## 개발 도구
- HTML , CSS, JS
- React
- SpringBoot
- AWS <br/>


## 개발 기간
2023.12 - 2024.02<br/>

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
링크의 solution 2 방식으로 백엔드 코드 수정
<br/><br/>

![ezgif-4-08d735af3e](https://github.com/HwangJaemin49/BobMate-Web/assets/97292379/fcb7f90a-740c-47df-b3c9-4e8e501c6119)<br/>
컨텐츠 결과 찾기 완료 페이지(https://github.com/HwangJaemin49/BobMate-Web/blob/main/src/pages/FindDone.jsx)<br/><br/>
