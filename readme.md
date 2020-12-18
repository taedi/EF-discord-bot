# [모두의 숲 ` Season2 🌱](https://discord.gg/forest) 디스코드봇
 > 멤버 조회를 위해 만들어진 디스코드 봇

## 봇 기능
 - 실시간으로 음성 채널에 접속한 유저 수가 보입니다 (콘솔 한정)
 - 10분에 1번씩 디스코드 서버 채널에 유저 수를 적용합니다

## 설치방법 (콘솔 환경)
[node](https://nodejs.org/) 및 [npm](https://www.npmjs.com/)이 설치되어 있어야 정상적으로 작동할 수 있습니다

 1. git clone https://github.com/taedi/EF-discord-bot.git
    > 봇 코드를 다운로드 합니다
 2. npm i
    > 봇 실행을 위한 필수 패키지를 다운로드 합니댜
 3. settings.example.json 파일을 settings.json 으로 이름 변경합니다
    > settings.json 파일에 설정을 진행하게 됩니다
 4. settings.json을 작성합니다
    > [먼저 Discord 개발자 모드를 활성화를 진행해 주세요](https://github.com/taedi/EF-discord-bot#discord-개발자-모드-활성화) <br>
    > [settings.json 작성방법](https://github.com/taedi/EF-discord-bot#settingsjson-작성)
 5. node . 혹은 node index.js
    > 봇을 실행합니다

## Discord 개발자 모드 활성화
 1. 디스코드 설정에 들어갑니다
 2. 앱 설정 > 디스플레이 로 들어갑니다
 3. '고급'에서 개발자 모드를 활성화합니다

## settings.json 작성
  > 서버/채널 ID는 이름을 우클릭 후, ID 복사하기를 클릭하시면 됩니다 (개발자 모드 필요)
 - token: 봇 토큰을 넣어주세요
 - guildId: 서버 ID를 넣어주세요
 - all: 전체 멤버 수를 표시할 채널 ID를 넣어주세요
 - member: 유저 수를 표시할 채널 ID를 넣어주세요
 - bot: 봇 수를 표시할 채널 ID를 넣어주세요
 - voice: 음성 채널에 접속한 유저 수를 표시할 채널 ID를 넣어주세요

## 주의사항
 - 1개의 봇은 1개의 서버에서만 작동됩니다
    > 1개의 봇이 2개 이상의 서버에 접속하게 될 경우, 오류가 발생할 수 있습니다 <br>
    > 각 서버마다 새로운 봇을 만들어서 실행해 주세요
 - 초기 상태에서는 '전체 멤버/유저/봇' 수는 디스코드에서 표시되지 않습니다
    > index.js 파일에서 주석을 삭제한 후에 사용해 주세요

## Thanks To
 - [PMH](https://github.com/pmh-only)
 - [SangHyeon님](https://github.com/gitksh)
