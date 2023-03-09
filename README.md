# Next.js + Tailwind ChatGPT

## 소개

NextJS 13버전을 사용하여 ChatGPT를 통한 채팅창입니다.
해당 프로젝트는 타입스크립트로 제작되었습니다. 해당 프로젝트 Next13버전에서 추가된 App 디렉토리를 통해 제작되었습니다. <br>
PC와 테블릿의 반응형은 제작되었지만 모바일의 경우 완벽하게 제작되지 않았습니다.<br>
[ChatGPT 바로가기](https://chat-gpt-messenger-one.vercel.app)

## 사용 기술 스택

- ReactJS 18
- NextJS 13
- OpenAi
- firebase
- next-auth
- swr
- heroicons
- tailwindCss

## 페이지 구성

### Login

메인에 존재하는 문구를 클릭하면 Next-auth를 통한 구글 로그인이 활성화됩니다.

### Main

메인에는 크게 사이드 바와 홈페이지로 구성이 되어있습니다.
현재 선택된 채팅방이 없다면 메인 화면이 표시되며 채팅방을 클릭하거나 새로운 채팅을 하게된다면 홈 페이지에서 채팅 페이지로 이동되게 됩니다.

### SideBar

사이드바는 ai 모델을 선택하거나 채팅방을 선택할 수 있는 컴포넌트입니다.
ai모델은 swr을 통해 전역으로 관리가 되고 있습니다.
기본 ai 모델은 text-davinci-003 입니다.
태블릿 이하의 사이즈에서는 모델 선택창이 채팅 페이지로 옮겨지게 됩니다.
로그아웃을 원한다면 하단에 존재하는 이미지(본인 이름)을 클릭하면 로그아웃을 할 수 있습니다.

### Chat

실제로 채팅을 할 수 있는 컴포넌트입니다.
React-hot-toast를 사용하여 openAi로부터 응답 상태를 Ui를 통해 확인이 가능합니다.
