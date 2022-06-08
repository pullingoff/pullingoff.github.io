# 깃허브 페이지 배포 Failed to load 404 에러 해결법

## 개요

방금 [JS QUIZ](https://pullingoff.github.io/js-quiz/) 만들어서 배포했는데
`Failed to load resource: the server responded with a status of 404 ()`가 떴다. 

리액트+타입스크립트로 짠 코드를 js로 컴파일->빌드까지 했고, `build` 디렉토리에 `index.html`도 잘 있었다. 

## 해결법

`package.json`에서 `"homepage": "js-quiz",` 추가해주기.

## 설명

나는 `js-quiz` 레포를 메인 깃허브페이지로 하는게 아니고 **pullingoff.github.io/js-quiz**로 해주는 거라 `homepage` 설정을 해줘야했다.
안 그러면 pullingoff.github.io에 가서 index.html을 찾기 때문에 404가 뜬다.