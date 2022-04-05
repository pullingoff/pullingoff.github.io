---
title: "[React] 함수형, 클래스형 컴포넌트의 차이와 리액트 개발 시 주의할 점"
date: 2021-06-15 08:00
---

## React의 특징

- 컴포넌트. 반복되는 부분을 하나의 구성요소로 만들어 코드 재사용
- state 관리. 
- virtual dom: 연산 줄여줌. 리소스 재활용. (처음에는 로드하느라 조금 느릴 수 있지만 그다음부터는 페이지 전환이 빠름)


## 클래스형 컴포넌트

- 옛날 문법
- render() 안에서 return 

## 함수형 컴포넌트

- 함수(function)를 기반으로 작성

## 비교

- 함수형에서 props 접근할 때는 {props.text} vs class에서는 this.props.text
- class 형에서 componentDidMount 는 함수형의 useEffect로 대체 가능

## 리액트 개발 시 주의할 점

- react 사용할땐 DOM 직접 조작을 피할 것. 변경하려는 유일한 것은 state여야. 
- 클래스 이름 변경 시엔 classnames사용하기
- NavLink (reactRouter) 쓰면 active classname 설정 가능
- 리액트에서 prop을 주고 받을때 필요한 컴포넌트가 여럿 넓게 펼쳐져 있는 경우, 주고 받기 복잡하고 유지보수 또한 어려워진다. 그럴땐 리액트 자체 context api를 사용하면 좋다. 이 둘은 context 형식을 사용해 필요한 상태가 있는 컨텍스트를 따로 만들어두고 필요할 때 그때그때 값을 사용할 수 있게 한다.
