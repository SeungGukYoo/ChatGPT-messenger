# Next.js + Tailwind ChatGPT

## 프로젝트 소개

NextJS 13버전을 사용하여 ChatGPT를 통한 채팅창입니다.
해당 프로젝트는 타입스크립트로 제작되었습니다. 해당 프로젝트 Next13버전에서 추가된 App 디렉토리를 통해 제작되었습니다. <br>
PC와 테블릿의 반응형은 제작되었지만 모바일의 경우 완벽하게 제작되지 않았습니다.<br>
[ChatGPT 바로가기](https://chat-gpt-messenger-one.vercel.app)

### 사용 기술 스택

![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![ReactJS](https://img.shields.io/badge/React-000?style=for-the-badge&logo=react)
![NextJS](https://img.shields.io/badge/Next-444444?style=for-the-badge&logo=Next.js)
![TailwindCss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)
![openai](https://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=ffffff)
![firebase](https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=ffffff)

## 학습 내용

해당 프로젝트를 진행하면서 기존까지는 \_app.tsx에서 불러와 컴포넌트를 wrapping하는 방식으로 진행하다가 layout.tsx파일을 통해 app에서 분리해서 진행함으로 써 레이아웃을 좀 더 효율적으로 관리할 수 있습니다.

### 문제와 해결과정

#### 1. pages/api

일반적으로 서버나 API를 요청할 때 따로 통신 파일을 생성해서 로직을 처리하였습니다. 하지만 이렇게 생성한 파일은 클라이언트 측 파일로 구성되기 때문에 번들의 크기를 증가시키는 요인이 되게 됩니다.<br>
<b>해결과정</b><br>
NextJS에는 pages/api폴더로 인하여 엔드포인트의 방식으로 서버리스 함수로 배포를 할 수 있습니다. 그렇기 때문에 해당 폴더에 생성한 API는 클라이언트의 번들에 추가되지 않아 번들의 크기를 줄이는데 도움이 되게 됩니다.

#### 2. Firebase Store에서 데이터 관리와 인증

Firebase Store에 데이터를 추가하고, 불러오는데 많은 데이터들의 중첩으로 인해 코드가 길어지고, 가독성이 좋지 않아 잘못된 데이터를 가져오거나 못가지고 오는 경우가 많았습니다.</br>
<b>해결과정</b><br>
react-firebase-hooks 라이브러리를 통해 데이터를 추가하고 불러오는 코드를 간결해졌기 때문에 데이터를 보다 쉽게 추가, 수정 및 제거할 수 있게 되었습니다.

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
